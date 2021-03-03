import { IMenu } from "./Sidebar";

export const getUrlIndex = (pathName:string,menu:IMenu[]):number => {
    const dataIndex = menu.findIndex(m => {
        const exsit = !!m.sub.find((sb) =>  pathName === sb.path)
        if(pathName === "/productList")
            console.log({exsit});
        return exsit
    })


    //만약에 일치하는게 없다면
    //재귀호출 pathName은 /를 한단계 나누어 진행
    const lastSlash = pathName.lastIndexOf("/");
    const next = pathName.substr(0, lastSlash )
    const noMatch = dataIndex === -1 
    if(!next && noMatch) return 0;
    if(noMatch) return getUrlIndex(next,menu)
    return dataIndex;
}