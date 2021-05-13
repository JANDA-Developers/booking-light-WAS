import { Flex } from "@janda-com/front";
import React from "react";
import { useHistory } from "react-router-dom";
import { CardHeadButton } from "../../../atom/CardHeadButtn";
import { Clip } from "../../../atom/clip/Clip";
import { useStoreList } from "../../../hook/useStore";
import { Paths } from "../../../MainRouter";
import { storeList_StoreList_items } from "../../../type/api";
import { yyyymmdd } from "../../../utils/dateFormat";
import { ISummaryCardProps, SummaryCard } from "./SummaryCard";

interface IProp {}

export const StoreSummaryCard: React.FC<IProp> = (props) => {
    const { items } = useStoreList(
        {
            initialViewCount: 5,
        },
        { fetchPolicy: "cache-first" }
    );
    const history = useHistory();

    const handleViewMore = () => {
        history.push(Paths.itemList);
    };

    const handleTitelClick = (item: storeList_StoreList_items) => () => {
        history.push(Paths.itemDetail + "/" + item._id);
    };

    const Nodes = items.map((item) => [
        <span className="summaryCard__cell" onClick={handleTitelClick(item)}>
            {item.name}
        </span>,
        <span className="summaryCard__cell">{yyyymmdd(item.createdAt)}</span>,
        <span className="summaryCard__cell">{item.description}</span>,
    ]);

    return (
        <SummaryCard
            contentsId="StoreSummaryCard"
            mb
            className="summaryCard"
            head={
                <Flex between>
                    <span>스토어현황</span>{" "}
                    <CardHeadButton
                        onClick={handleViewMore}
                        label="자세히보기"
                    />
                </Flex>
            }
            mr
            contents={Nodes}
        />
    );
};
