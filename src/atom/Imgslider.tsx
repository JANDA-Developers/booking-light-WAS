import { JDslider, JDslide, JDphotoFrame } from '@janda-com/front';
import React from 'react';

interface IProp {
    imgs?: string[]
}

export const ImgSlider: React.FC<IProp> = ({ imgs = [] }) => {
    return <JDslider>
        {imgs.map((img, i) =>
            <JDslide key={i + "imgSliderImg"} >
                <JDphotoFrame isBgImg src={img} />
            </JDslide>
        )}
    </JDslider>;
};
