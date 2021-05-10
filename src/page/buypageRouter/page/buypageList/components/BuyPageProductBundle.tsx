import { autoComma, JDbadge, JDtypho } from "@janda-com/front";
import { TElements } from "@janda-com/front/dist/types/interface";
import React, { useContext } from "react";
import { IImgCardProps, ImgCard } from "../../../../../atom/ImgCard";
import { LineCutter } from "../../../../../atom/LineCutter";
import { CardBtn } from "../../../../../component/btns/ModalBtn";
import { Ratio } from "../../../../../type/const";
import { BuypageContext } from "../helper/context";
import { IBuypageProductData } from "../helper/productMap";
import { SoldOutBadge } from "./SoldOutBadge";

interface IProp extends Partial<IImgCardProps> {
    soldOut?: boolean;
    Price?: TElements;
    bundle: IBuypageProductData;
    onImgView: () => void;
    onDetail: () => void;
}

export const BuyPageProductBundle: React.FC<IProp> = ({
    Price,
    soldOut,
    onDetail: handleDetail,
    bundle,
    onImgView: handleImgView,
    children,
    ...props
}) => {
    const { noPayMethod } = useContext(BuypageContext);
    const { images, thumbNail, name, lowPrice, _id, description } = bundle;
    const PriceElement = noPayMethod
        ? null
        : Price || <div>~{autoComma(lowPrice)} KRW</div>;

    console.log({ description });

    return (
        <ImgCard
            mb
            onImgClick={handleImgView}
            img={thumbNail}
            foot={
                <CardBtn size="long" onClick={handleDetail}>
                    자세히보기
                </CardBtn>
            }
            head={
                <JDtypho weight={600} flex={{ between: true }} size="large">
                    {name} {PriceElement}
                </JDtypho>
            }
            photoProp={{
                ratio: Ratio["16:9"],
            }}
            {...props}
        >
            <SoldOutBadge
                size="small"
                isSoldOut={soldOut}
                mb="tiny"
                bundle={bundle}
            />
            {children}
            <LineCutter size="small" line={3}>
                {bundle.description}
            </LineCutter>
        </ImgCard>
    );
};
