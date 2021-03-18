import { JDslider, JDslide, JDphotoFrame, Large } from '@janda-com/front';
import React from 'react';
import PhotoFrame, { IPhotoFrameProps } from '../component/photoFrame/PhotoFram';

interface IProp {
    imgs?: string[]
    photoProps?: IPhotoFrameProps
}

export const ImgSlider: React.FC<IProp> = ({ imgs = [], photoProps }) => {
    return <JDslider>
        {imgs.map((img, i) =>
            <JDslide key={i + "imgSliderImg"} >
                <PhotoFrame src={img} {...photoProps} isBgImg />
            </JDslide>
        )}
    </JDslider>;
};
