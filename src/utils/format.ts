import { autoHypen } from "@janda-com/front";

export const toPhoneNumber = (str:string)=> autoHypen(str.replace("+82",""));