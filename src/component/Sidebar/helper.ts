import { IMenu } from "./Sidebar";

export const getUrlIndex = (pathName:string,menu:IMenu[]) => {
    const dataIndex = menu.findIndex(m => {
        const exsit = !!m.sub.find((sb) =>  pathName === sb.path)
        return exsit
    })


    return dataIndex === -1 ? 0 : dataIndex;
}