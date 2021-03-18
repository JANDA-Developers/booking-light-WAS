import { Bold, Flex, IJDalignProp, JDalign, JDphotoFrame, JDtypho } from '@janda-com/front';
import { IDiv, TElements } from '@janda-com/front/dist/types/interface';
import { useResizeDetector } from 'react-resize-detector';
import { IPhotoFrameProps, PhotoFrame } from "../component/photoFrame/PhotoFram";

export interface IImgCardProps extends IDiv, IJDalignProp {
    head: TElements;
    foot: TElements;
    img: string;
    photoProp?: IPhotoFrameProps;
    onImgClick: () => void;
}

//좌단에 이미지를 정렬하는 카드
//size auto 일때는 모바일에 가까울때 세로형 카드 
//PC 에 가까울때 가로형 카드로 나타난다.
export const ImgCard: React.FC<IImgCardProps> = ({ foot, head, children, img, onImgClick: handleImgClick, className, photoProp, ...props }) => {
    const { width, height, ref } = useResizeDetector();

    return <JDalign className={`imgCard ` + className} {...props}>
        <div ref={ref as any}>
            <Flex column={(width || 0) < 800} oneone>
                <PhotoFrame ratio={1} src={img} className="imgCard__photo" onClick={handleImgClick} isBgImg {...photoProp} />
                <Flex column between className="imgCard__contents">
                    <div>
                        <div className="imgCard__head">
                            {head}
                        </div>
                        <div className="imgCard__body">
                            {children}
                        </div>
                    </div>
                    <Flex vCenter end className="imgCard__foot">
                        {foot}
                    </Flex>
                </Flex>
            </Flex>
        </div>
    </JDalign>;
};
