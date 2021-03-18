import React from 'react';
import classNames from 'classnames';
import { JDatomClasses, WindowSizeNumber } from '@janda-com/front';
import { IDiv, JDatomExtentionSet } from '@janda-com/front/dist/types/interface';
import { IUploadIconProp } from '@janda-com/front/dist/components/iconUploader/IconUploader';

export interface IPhotoFrameProps extends JDatomExtentionSet, IDiv, IUploadIconProp {
    /** 소스 */
    src?: string;
    /** 언어 소스에서 명명법을 이용해 참조 */
    lang?: string;
    /** 반응형 소스에서 명명법을 이용해 참조 */
    responseImg?: boolean;
    /** 프레임 스타일을 제거 */
    unStyle?: boolean;
    type?: string;
    /** 백그라운드 이미지로 변경 */
    isBgImg?: boolean;
    ratio?: number
    context?: any;
    windowWidth?: number;
}

// Lang should be a TShortCut
export const PhotoFrame: React.FC<IPhotoFrameProps> = ({
    mb,
    mr,
    src: srcProp = 'https://s3.ap-northeast-2.amazonaws.com/booking.stayjanda.files/infographic/noimg.png',
    type,
    unStyle = true,
    lang,
    context,
    responseImg,
    isBgImg,
    children,
    className,
    ratio,
    windowWidth = window.innerWidth,
    ...props
}) => {
    let src = srcProp;

    const sideIsOpen = context?.sideNavIsOpen;

    // "mb" || "pc"
    if (responseImg) {
        const changePoint = sideIsOpen
            ? WindowSizeNumber.DESKTOP
            : WindowSizeNumber.TABLET;

        if (windowWidth < changePoint) {
            src += '--mb';
        } else {
            src += '--pc';
        }
    }

    if (lang) {
        src += `--${lang}`;
    }
    if (type) src += type;

    const classes = classNames('photoFrame', className, {
        'photoFrame--fixHeight': isBgImg,
        'photoFrame--unStyle': unStyle,
        ...JDatomClasses({ mb, mr })
    });

    const bg = src;

    const paddingTop = ratio ? 100 / ratio : undefined;

    const RATIO_DIV_STYLE: React.CSSProperties = {
        height: 0,
        position: 'relative',
        width: '100%',
        paddingTop: `${paddingTop}%`,
    }

    return (
        <div className={classes} {...props}>
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
