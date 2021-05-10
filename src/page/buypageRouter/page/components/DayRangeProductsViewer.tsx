import { Flex } from "@janda-com/front";
import React from "react";
import { Info } from "../../../../atom/Info";
import { LineCutter } from "../../../../atom/LineCutter";
import { Photo } from "../../../../component/photoFrame/PhotoFram";
import { Ratio } from "../../../../type/const";
import { yyyymmddLabelRange } from "../../../../utils/dateFormat";
import { IBuypageProductData } from "../buypageList/helper/productMap";

interface IProp {
    item: IBuypageProductData;
    count: number;
    start: Date;
    end: Date;
}

export const DayRangeProductViewer: React.FC<IProp> = ({
    item,
    count,
    start,
    end,
}) => {
    return (
        <Flex oneone>
            <Photo mr file={item.thumbNail} isBgImg ratio={Ratio["16:9"]} />
            <div>
                <Info label={"선택수량"} value={count.toString()} mb="small" />
                <Info
                    label={"선택시간"}
                    value={yyyymmddLabelRange(start, end)}
                    mb="small"
                />
                <LineCutter size="small" line={3}>
                    {item.description}
                </LineCutter>
            </div>
        </Flex>
    );
};
