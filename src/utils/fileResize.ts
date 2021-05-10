import { dataURLtoFile, isLast } from "@janda-com/front";
import { fileExtendDivider } from "./fileExtendDivider";
import { resample_single } from "./resizeCanvas";

// 그 파일들을 일제히 업로드한다.
export const getFileImageSize = (
    file: File,
    callBack: (size: { width: number; height: number }) => void
) => {
    const _URL = window.URL || window.webkitURL;
    const img = new Image();
    var objectUrl = _URL.createObjectURL(file);
    img.onload = function () {
        _URL.revokeObjectURL(objectUrl);
        img.src = objectUrl;
        const { width, height } = img;
        callBack({ height, width });
    };
};

export interface IResizeImageOptions {
    suffix?: string;
    changedFileName?: string;
    maxSize: number;
    file: File;
}

export const resizeImage = (settings: IResizeImageOptions): Promise<File> => {
    const file = settings.file;
    const maxSize = settings.maxSize;
    const reader = new FileReader();
    const image = new Image();
    const canvas = document.createElement("canvas");

    const resize = () => {
        let width = image.width;
        let height = image.height;

        if (width > height) {
            if (width > maxSize) {
                height *= maxSize / width;
                width = maxSize;
            }
        } else {
            if (height > maxSize) {
                width *= maxSize / height;
                height = maxSize;
            }
        }

        const canvasContext = canvas.getContext("2d");
        canvas.width = width;
        canvas.height = height;
        canvasContext?.drawImage(image, 0, 0, width, height);
        resample_single(canvas, width, height, true);

        let dataUrl = canvas.toDataURL(file.type);
        const fileName = settings.changedFileName || file.name;
        const { extend, namePart } = fileExtendDivider(fileName);
        const suffixStr = `---${settings.suffix || maxSize}`;

        const newfileName = namePart + suffixStr + "." + extend;

        return dataURLtoFile(dataUrl, newfileName);
    };

    return new Promise((ok, no) => {
        if (!file.type.match(/image.*/)) {
            no(false);
            return;
        }

        reader.onload = (readerEvent: any) => {
            image.onload = () => ok(resize());
            image.src = readerEvent.target.result;
        };
        reader.readAsDataURL(file);
    });
};
