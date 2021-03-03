import { gql } from "@apollo/client"
import {F_FILE, F_PAGEINFO,  F_USERERROR } from "./fragment/fragments";



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
        ...Ffile
      }
    }
  }
  ${F_FILE}
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