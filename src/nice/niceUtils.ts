import {INiceElementProp} from "./NiceElments";

export const fillNiceElement = (info:INiceElementProp) => {
    Object.entries(info).forEach(([key,value]) => {
        const target = document.getElementById(`Nice${key}`)
        if (target) (target as HTMLInputElement).value = value
    })
}
