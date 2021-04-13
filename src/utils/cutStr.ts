export const cutStr = (str:string = "",len:number, trail:string = "...") => {
    if(typeof str !== "string") return ""
    if(str.length > len) {
        return str.substr(0,len) + trail
    } 
    return str
}