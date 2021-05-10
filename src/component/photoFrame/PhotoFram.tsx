import React, { useEffect, useRef, useState } from "react";
import classNames from "classnames";
import { JDatomClasses, WindowSizeNumber } from "@janda-com/front";
import {
    IDiv,
    JDatomExtentionSet,
} from "@janda-com/front/dist/types/interface";
import { IUploadIconProp } from "@janda-com/front/dist/components/iconUploader/IconUploader";
import { LOADING_SVG, NO_IMG } from "../../type/const";
import {
    fileExtendDivider,
    urlExtendDivider,
} from "../../utils/fileExtendDivider";
import { Ffile } from "../../type/api";

export interface IPhotoFrameProps
    extends JDatomExtentionSet,
        IDiv,
        IUploadIconProp {
    /** 소스 */
    src?: string | null;
    /** 언어 소스에서 명명법을 이용해 참조 */
    lang?: string;
    /** 프레임 스타일을 제거 */
    unStyle?: boolean;
    type?: string;
    /** 백그라운드 이미지로 변경 */
    isBgImg?: boolean;
    ratio?: number;
    context?: any;
    windowWidth?: number;
    loading?: boolean;
    resizeds?: string[];
}

// Lang should be a TShortCut
export const PhotoFrame: React.FC<IPhotoFrameProps> = ({
    mb,
    mr,
    hover,
    src: srcProp,
    type,
    unStyle = true,
    lang,
    context,
    isBgImg,
    children,
    loading,
    className,
    resizeds,
    ratio,
    windowWidth = window.innerWidth,
    ...props
}) => {
    const refContinaer = useRef<HTMLDivElement>(null);
    const [containerWidth, setContainerWidth] = useState(0);
    let src = srcProp || NO_IMG;

    if (resizeds) {
        src = "";
    }

    if (resizeds && containerWidth) {
        let imgWidth = containerWidth;
        const biggerThans = resizeds
            .map((size) => parseInt(size))
            .filter((reszied) => reszied > containerWidth * 2);
        const sorted = biggerThans.sort((a, b) => a - b);

        if (sorted[0]) {
            imgWidth = sorted[0];

            const { extend, namePart } = urlExtendDivider(srcProp || ".");

            src = namePart + "---" + imgWidth + "." + extend;
        } else {
            src = srcProp || NO_IMG;
        }
    }

    if (lang) {
        src += `--${lang}`;
    }
    if (type) src += type;

    const classes = classNames("photoFrame", className, {
        "photoFrame--fixHeight": isBgImg,
        "photoFrame--unStyle": unStyle,
        ...JDatomClasses({ mb, mr, hover }),
    });

    const paddingTop = ratio ? 100 / ratio : undefined;

    const RATIO_DIV_STYLE: React.CSSProperties = {
        height: 0,
        position: "relative",
        width: "100%",
        paddingTop: `${paddingTop}%`,
    };

    useEffect(() => {
        if (refContinaer.current)
            setContainerWidth(refContinaer.current.clientWidth);
    }, [refContinaer]);

    if (loading) {
        src = LOADING_SVG;
    }

    const bg = src;
    return (
        <div ref={refContinaer} className={classes} {...props}>
            {isBgImg && (
                <div
                    style={{
                        ...(ratio ? RATIO_DIV_STYLE : undefined),
                        backgroundImage: `url(${bg})`,
                    }}
                    className="photoFrame__bgimg"
                />
            )}
            {children}
            {isBgImg || <img className="photoFrame__img" src={src} />}
        </div>
    );
};

export default PhotoFrame;

interface IProp extends IPhotoFrameProps {
    file?: Ffile | null;
}
//래팩토링 Me 이건 파일받아서 만들어주는 hight api
export const Photo: React.FC<IProp> = ({ file, ...props }) => {
    if (!file) return <PhotoFrame {...props} />;
    const { tags } = file;
    const resizeds = tags
        .find((tag) => tag.key === "resized")
        ?.value.split(",");

    console.log({ resizeds });
    return <PhotoFrame src={file.uri} {...props} resizeds={resizeds} />;
};
