import { JDslider, JDslide, JDphotoFrame, Large, TJDsliderProp } from '@janda-com/front';
import React from 'react';
import PhotoFrame, { IPhotoFrameProps } from '../component/photoFrame/PhotoFram';

interface IProp extends TJDsliderProp {
    imgs?: string[]
    photoProps?: IPhotoFrameProps
    onClickImg?: (src: string, index: number) => void;
}

export const ImgSlider: React.FC<IProp> = ({ onClickImg, imgs = [], photoProps, ...props }) => {
    return <JDslider {...props} slidesPerRow={1} >
        {imgs.map((img, i) =>
            <JDslide key={i + "imgSliderImg"} >
                <PhotoFrame onClick={() => { onClickImg?.(img, i) }} src={img} {...photoProps} isBgImg />
            </JDslide>
        )}
    </JDslider>;
};
