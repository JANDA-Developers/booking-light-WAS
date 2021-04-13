import React, { useState } from 'react';
import { ImgSlider } from '../../atom/Imgslider';
import { Ratio } from '../../type/const';
import { PhotoFrame } from '../photoFrame/PhotoFram';

interface IProp {
    images: string[]
}

export const ThumbsSlider: React.FC<IProp> = ({ images }) => {
    const [thumbNail, setThumbNail] = useState(images[0] || "")
    return <div >
        <PhotoFrame mb isBgImg ratio={Ratio['16:9']} src={thumbNail || ""} />
        {images.length > 1 &&
            <ImgSlider hover onClickImg={setThumbNail} photoProps={{ ratio: Ratio['16:9'], style: { height: 100 } }} slidesToShow={images.length} imgs={images} />
        }
    </div>;
};
