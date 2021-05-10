import { autoComma, Bold, Flex } from "@janda-com/front";
import React from "react";
import { useHistory } from "react-router-dom";
import { CardHeadButton } from "../../../atom/CardHeadButtn";
import { useBoardDocList } from "../../../hook/useBoardDoc";
import { Paths } from "../../../MainRouter";
import { boardDocList_BoardDocList_items } from "../../../type/api";
import { BoardKeys } from "../../../type/enum";
import { yyyymmdd } from "../../../utils/dateFormat";
import { stripHtml } from "../../../utils/stripHtml";
import { SummaryCard } from "./SummaryCard";

interface IProp {}

export const AnnounceSummaryCard: React.FC<IProp> = () => {
    const { items } = useBoardDocList(
        {
            initialFilter: {
                boardKey__eq: BoardKeys.ANNOUNCE,
            },
        },
        { fetchPolicy: "cache-first" }
    );
    const history = useHistory();

    const handleViewMore = () => {
        history.push(Paths.itemList);
    };

    const handleViewAnnounce = (item: boardDocList_BoardDocList_items) => {
        history.push(
            Paths.boardView + "/" + BoardKeys.ANNOUNCE + "/" + item._id
        );
    };

    // const handleTitelClick = (itemId: string) => () => {
    //     history.push(Paths.productDetail + "/" + itemId)

    // }

    const Nodes = items.map((item) => [
        <Bold
            hover
            onClick={() => {
                handleViewAnnounce(item);
            }}
            className="summaryCard__cell"
        >
            {item.title}
        </Bold>,
        <span className="summaryCard__cell">{yyyymmdd(item.createdAt)}</span>,
        <span className="summaryCard__cell">{stripHtml(item.contents)}</span>,
    ]);

    return (
        <SummaryCard
            contentsId="NotificationSummaryCard"
            mb
            className="summaryCard"
            head={
                <Flex between>
                    <span>공지사항</span>{" "}
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
