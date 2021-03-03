import { Bold, Flex, JDphotoFrame, JDtypho } from '@janda-com/front';
import { IDiv, TElements } from '@janda-com/front/dist/types/interface';
import React from 'react';

interface IProp extends IDiv {
    head: TElements;
    foot: TElements;
    img: string;
    onImgClick: () => void;
}

//좌단에 이미지를 정렬하는 카드
export const ImgCard: React.FC<IProp> = ({ foot, head, children, img, onImgClick: handleImgClick }) => {
    return <div className="imgCard">
        <Flex column oneone>
            <JDphotoFrame src={img} className="imgCard__photo" onClick={handleImgClick} isBgImg />
            <div className="imgCard__body">
                <Bold className="imgCard__head">
                    {head}
                </Bold>
                {children}
                <Flex vCenter end className="imgCard__foot">
                    {foot}
                </Flex>
            </div>
        </Flex>
    </div>;
};
