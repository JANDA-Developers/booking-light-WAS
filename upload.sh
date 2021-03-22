function show_current_version() {
  PACKAGE_VERSION=$(sed -nE 's/^\s*"version": "(.*?)",$/\1/p' package.json)
  echo "current version is" $PACKAGE_VERSION
}


show_current_version

CLEAR=FALSE
VERSION=""
read -p "version: " VERSION
yarn version --new-version $VERSION

read -p "With Build? Y/N " ANSWER

case "$ANSWER" in 
  [yY] | [yY][eE][sS])
    yarn build
    ;;
  [nN] | [nN][oO])
    echo "Ok, without build"
    ;;
  *)
    echo "Please enter y/yes or n/no"
    ;;
esac

function upload() {

  if [ "$2" == "clear" ]
  then
      aws s3 rm s3://jungle.booking.stayjanda.cloud/$1
  fi
  aws s3 sync ./build s3://jungle.booking.stayjanda.cloud/$1 --acl public-read
}



while true;do
echo "select the operation ************"
echo "  1)Next 1"
echo "  2)Stable 2"
echo "  3)Latest 3"

read n
case $n in
  1) echo "upload next..." && upload "next" $1;;
  2) echo "upload stable..." && upload "" $1;;
  3) echo "upload ${VERSION}..." && upload "$VERSION" $1;;
  *) "invalid option" $1;;
esac
done

GREEN='\033[0;32m'
NC='\033[0m' # No Color

echo -e "${GREEN}done${NC}"
