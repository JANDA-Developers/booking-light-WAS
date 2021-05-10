function upload() {
  aws s3 sync ./dist s3://jungle-booking-admin/ --acl public-read
}
upload