export const checkFileSize = (file: File, sizeMB: number = 5) => {
    const maxAllowedSize = sizeMB * 1024 * 1024;
    if (file.size > maxAllowedSize) {
        alert(
            `파일 사이즈가 너무 큽니다. 
            ${sizeMB}MB 이하 사이즈로 업로드 해주세요.
             현재 사이즈는 ${Math.floor(file.size / (1024 * 1024))}MB 입니다.`
        );
        return false;
    }
    return true;
};
