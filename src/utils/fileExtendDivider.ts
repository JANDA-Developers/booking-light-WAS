import { isLast } from "@janda-com/front";

export const fileExtendDivider = (fileName: string) => {
    const spliteda = fileName.split(".");
    const extend = spliteda.pop();
    let namePart = spliteda.join(".");

    return { extend, namePart };
};

export const urlExtendDivider = (fileName: string) => {
    const spliteda = fileName.split(".");
    const extend = spliteda.pop();
    let namePart = spliteda.join(".");

    return { extend, namePart };
};
