import { useMutation } from "@apollo/client";
import { dataURLtoFile, IuseImageUploaderOption, onCompletedMessage, TlocalFile, useFilesManager } from "@janda-com/front"
import { FileInput } from "@janda-com/sms/dist/types/api";
import { useEffect } from "react";
import { FILE_UPLOADS } from "../apollo/gql/file";
import { Ffile, fileUploads, fileUploadsVariables } from "../type/api";
import { ETagKeys } from "../type/interface";


const covertFile = (localFile:TlocalFile):File => {
    const {base64,fileName} = localFile;
    const files = dataURLtoFile(base64, fileName);
    return files
}

interface IUseFileUploadProp {
    groupName: string
    onFileUpload?: (fileIds:string[]) => void;
    description?: string
    overriden?: boolean;
    directUpload?: boolean;
    defaultImages?: Ffile[], 
    localFileKey?: string | undefined, 
    imgOption?: IuseImageUploaderOption | undefined
}

export const useFileUpload = ({groupName,description,onFileUpload,overriden,defaultImages,directUpload,imgOption,localFileKey}:IUseFileUploadProp) => {
    const defaultUrls = defaultImages?.map(img => img.uri);
    const fileManager = useFilesManager(defaultUrls, localFileKey, imgOption);
    const [upload, {loading}] = useMutation<fileUploads,fileUploadsVariables>(FILE_UPLOADS, {
        onCompleted: ({FileUploads}) => {
            if(FileUploads.ok) {
                const uriArr = FileUploads.data.map((file)=>{
                    const uri = file.uri;
                    return uri;
                })
                fileManager.setlocalFiles([])

                if(!overriden)
                    fileManager.setUrls([...fileManager.urls,...uriArr])
                else
                    fileManager.setUrls([...uriArr])
                
                const fileIds = FileUploads.data.map(d => d._id);
                onFileUpload?.(fileIds)
            }
         },
        variables: {
            files: fileManager.localFiles.map((file):FileInput => {
                return {
                    upload:covertFile(file),
                    tags: [
                        {key: ETagKeys.GROUP, value: groupName}, 
                        {key: ETagKeys.DESC, value: description || ""}
                    ]
                }
            })
        }
    })

    
    useEffect(() => {
        if (directUpload && fileManager.localFiles.length)
            upload()
    }, [fileManager.localFiles.length])

    const viewImage = fileManager.localFiles[0]?.base64 || fileManager.urls[0];
    const viewImages = [...fileManager.localFiles.map((file) => file.base64),...fileManager.urls];

    return {upload, loading, fileManager,viewImage,viewImages}
}
