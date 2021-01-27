import {getRefetch} from "@janda-com/front";
import { FILE_DELETES, FILE_LIST } from "../apollo/gql/file";
import { fileDeletes, fileDeletesVariables, fileList, fileListVariables, fileList_FileList_items, _FileFilter, _FileSort } from "../type/api";
import { generateListQueryHook, generateMutationHook } from "../utils/hookGen";

export const useFileDeletes = generateMutationHook<fileDeletes,fileDeletesVariables>(FILE_DELETES,{...getRefetch(FILE_LIST)});
export const useFileList = generateListQueryHook<_FileFilter,_FileSort,fileList,fileListVariables,fileList_FileList_items>(FILE_LIST);
