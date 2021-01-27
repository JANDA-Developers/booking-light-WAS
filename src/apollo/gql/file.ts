import { gql } from "@apollo/client"
import { F_COLLECTION_DATA_INTERFACE, F_PAGEINFO, F_TAG, F_USERERROR } from "./fragment/fragments";

export const F_FILE = gql`
    fragment Ffile on File {
        ...FcollectionDataInterface
        name
        description
        extension
        fileType
        uri
        tags {
           ...Ftag
        }
        owner {
           _id
           name
        }
    }
    ${F_COLLECTION_DATA_INTERFACE}
    ${F_TAG}
`

export const FILE_UPLOADS = gql`
  mutation fileUploads(
      $files: [FileInput!]!
    ) {
    FileUploads(
        files: $files
      ) {
      ok
      error {
        ...FuserError
      }
      data {
        _id
        uri
      }
    }
  }
  ${F_USERERROR}
`;

export const FILE_LIST = gql`
    query fileList(
        $sort: [_FileSort!]
        $filter: _FileFilter
        $pagingInput: OffsetPagingInput!
    ) {
    FileList(
        sort: $sort
        pagingInput: $pagingInput
        filter: $filter
    ) {
        pageInfo {
            ...FoffsetPagingInfo
        }
        items  {
            ...Ffile
        }
    }
}
${F_PAGEINFO}
${F_FILE}
`
export const FILE_DELETES = gql`
    mutation fileDeletes(
        $deleteFileList: [ObjectId!]!
    ) {
    FileDeletes(
        deleteFileList: $deleteFileList 
    ) {
        ok
        error {
            ...FuserError
        }
    }
}
${F_USERERROR}
`