import {
    JDcard,
    JDcontainer,
    JDdocHeader,
    JDtypho,
    WindowSize,
} from "@janda-com/front";
import React from "react";
import { useRouteMatch } from "react-router-dom";
import { BackStepBar } from "../../component/backstepBar/BackstepBar";
import { useBoardDocFindById } from "../../hook/useBoardDoc";
import { yyyymmddHHmm } from "../../utils/timeFormater";

interface IProp {}

type IDetailRouteProp = { boardDocId: string };

export const BoardDocView: React.FC<IProp> = () => {
    const {
        params: { boardDocId },
    } = useRouteMatch<IDetailRouteProp>();
    const { item: doc } = useBoardDocFindById(boardDocId);
    if (!doc) return null;
    const { title } = doc;
    return (
        <JDcontainer verticalPadding size={WindowSize.md}>
            <BackStepBar mb label="뒤로가기" />
            <JDcard>
                <JDdocHeader>{title}</JDdocHeader>
                <JDtypho mb="largest" flex={{ between: true }} color="grey2">
                    작성 {yyyymmddHHmm(doc.createdAt)}{" "}
                    <JDtypho color="grey2">글쓴이 {doc.authorName}</JDtypho>{" "}
                </JDtypho>
                <div dangerouslySetInnerHTML={{ __html: doc.contents }} />
            </JDcard>
        </JDcontainer>
    );
};

export default BoardDocView;
