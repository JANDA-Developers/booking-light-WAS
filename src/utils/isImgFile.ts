export const isImgFile = (file: File) => {
    return !!file.type.match(/image.*/);
};
