import { LocalManagerConfig } from "@janda-com/front/dist/utils/localManager";
import { useEffect, useState } from "react";
import { Ffile, FileCreateInput, FileInput, fileUploads_FileUploads_data } from "../type/api";
import { useFileUploads } from "./useFIle";

export class LocalManager<T extends string> {
    storage

    constructor(config: LocalManagerConfig) {
        if (typeof window === "undefined") return;
        if (config.storage === 'sessionStorage')
            this.storage = sessionStorage;
        else this.storage = localStorage;
    }

    saveLocal(key: T, value: string | number | Object): void {
        let _value = value;

        if (typeof value === 'number') {
            _value = value.toString();
        }

        if (typeof value === 'object') {
            try {
                _value = JSON.stringify(value);
            } catch (e) {
                this.storage?.removeItem(key);
                console.error('LocalManager::saveLocal:stringFyFailed');
                console.error(e);
            }
        }

        if (typeof _value === 'string') this.storage?.setItem(key, _value);
    }

    getLocalObj<O>(key: T, or?: O): O | undefined {
        if (typeof window === "undefined") return undefined;
        const value = this.storage?.getItem(key) || '';
        let result = or;

        try {
            result = value ? JSON.parse(value) : "";
        } catch (e) {
            this.storage?.removeItem(key);
            console.error('LocalManager::getLocalOj:parseFailed');
            console.error(e);
        }

        return result;
    }

    getLocal(key: T, or: string): string {
        const item = this.storage?.getItem(key) || '';
        return item || or;
    }

    getLocalNum(key: T, or: number): number {
        const item = this.storage?.getItem(key) || '';
        return parseInt(item) || or;
    }

    remove(key: T) {
        this.storage?.removeItem(key);
    }
}


const local = new LocalManager({storage:"sessionStorage"})

// 왜 로컬스토리지를 써야하는가 ?
// 너무 잦은 업데이트를 방지하기 위해서 ?
// 너무 복잡하게 됨 
// 코드가 단순한게 더 중요할듯.
// const useLocalFile = (key:string,defaultFiles?:Ffile[]) => {
//     const [uploadMu] = useFileUploads()
//     const [count, setUpdate] = useState(0);
//     const [files, setFiles] = useState<Ffile[]>(defaultFiles || [])

//     const update = () => {
//         setUpdate(count+1)
//     }
    
    
//     const inputChange = (e:React.ChangeEvent<HTMLInputElement>) => {
//         if(!e.currentTarget.files) return;
//         const fileArray = Array.from(e.currentTarget.files)
//         update()
//     }
    
//     const inputAdd = (e:React.ChangeEvent<HTMLInputElement>) => {
//         if(!e.currentTarget.files) return;
//         localSave(e.currentTarget.files)
//     } 
    
//     const inputUpdate = (e:React.ChangeEvent<HTMLInputElement>, index:number) => {
//         if(!e.currentTarget.files) return;
        
//     } 
    
//     const localSave = (files: FileList) =>{
//         const fileArray = Array.from(files)
//         local.saveLocal(key,fileArray)
//     };

//     const localAdd = (file:File) => {
//         local.saveLocal(key, files)
//     }
    
//     const get = () =>{
//         return local.getLocalObj<File[]>(key) || [];
//     }
    
//     const clear = () => {
//     }

//     const uploadLocalFiles = (tags?:{key:string,value:string}[]) => {
//         //여기에추가
//         uploadMu({
//             variables: {
//                 files: localFiles.map(file => ({
//                     upload: file,
//                     tags
//                 }))
//             }
//         })
//     }
    
//     const localFiles = get();


//     return  {localFiles, files}
    
// }

export const useFileUpload = () => {
    const [uploadMu] = useFileUploads()

    const onChange = (e:React.ChangeEvent<HTMLInputElement>) => {
        const file = e.currentTarget.files?.[0];
        if(!file) return;
        return uploadMu({
            variables: {
                files: [{
                    upload: file 
                }]
            }
        }).then(({data}) => {
            const file = data?.FileUploads.data?.[0];
            return file;
        })
    } 

    return {onChange}
}


export type TUseSingleUpload = ReturnType<typeof useSingleUpload>; 
//로컬 스토리지 안씀
export const useSingleUpload = (defaultFile?:Ffile, options?:TUploadOptuon) => {
    const [file, setFile] = useState<Ffile | undefined>(defaultFile)
    const [uploadMu] = useFileUploads()


    const onChange = (e:React.ChangeEvent<HTMLInputElement>) => {
        const file = e.currentTarget.files?.[0];
        if(!file) return;
        return uploadMu({
            variables: {
                files: [{
                    upload: file 
                }]
            }
        }).then(({data}) => {
            const file = data?.FileUploads.data?.[0];
            if(file) {
                console.log({file});
                setFile(file);
            }
        })
    } 

    const createInput:FileCreateInput | undefined = file ? {uri: file.uri,description:file.description,extension:file.extension,fileType:file.fileType,name:file.name} : undefined;

    return { setFile, onChange, ...file, file, createInput}
}

type TUploadOptuon = {
    group?: string
}

export type TUseMultiUpload = ReturnType<typeof useMultiUpload>; 
export const useMultiUpload = (defaultFiles:Ffile[] = [],options?:TUploadOptuon) => {
    const [files, setFiles] = useState<Ffile[] | undefined>(defaultFiles || [])
    const [uploadMu] = useFileUploads()

    //삭제함수
    const deleteFile = (id:string) => {
        setFiles(files?.filter(f => f._id === id));
    }

    //대상을 바꾸는 함수
    const changeFile = (e:React.ChangeEvent<HTMLInputElement>, index:number) => {
        const file = e.currentTarget.files?.[0];
        if(!file) return;
        uploadMu({
            variables: {
                files: [{
                    upload: file 
                }]
            }
        }).then(({data}) => {
            const file = data?.FileUploads.data?.[0];
            if(file) {
                files?.splice(index,1,file); 
                setFiles([...(files || [])]);
            }
        })
    } 

    //계속 추가하는 함수
    const onChange = (e:React.ChangeEvent<HTMLInputElement>) => {
        const _files = e.currentTarget.files;
        if(!_files) return;

        const fileInput:FileInput[] = []
        
        for(let file in _files) {
            fileInput.push({
                upload: file,
                tags: []
            })
        }

        uploadMu({
            variables: {
                files: fileInput
        }}).then(({data}) => {
            const newFiles = data?.FileUploads.data;
            if(newFiles) {
                setFiles([...(files || []), ...newFiles]);
            }
        })
    } 

    const fileIds = files?.map(file => file._id);
    const urls = files?.map(file => file.uri);

    const createInput:FileCreateInput[] = files?.map((file)=> ({uri: file.uri,description:file.description,extension:file.extension,fileType:file.fileType,name:file.name})) || [];

    return {onChange,changeFile,deleteFile,files,setFiles,urls,fileIds, createInput }
}