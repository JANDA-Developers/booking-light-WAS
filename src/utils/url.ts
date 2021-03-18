import { updateURLParameter } from "@janda-com/front";
import { IselectedOption } from "@janda-com/front/dist/types/interface";

export const updateURLParameters = (url:string, params?:IselectedOption[]) => {
    let _url = url
    params?.forEach(param =>  {_url = updateURLParameter(_url,param.label,param.value)})
    return _url;
}