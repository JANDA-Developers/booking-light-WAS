import {
    Bold,
    Flex,
    JDbutton,
    JDcontainer,
    JDpageHeader,
    Mb,
    Small,
    Thin,
    WindowSize,
} from "@janda-com/front";
import React, { useContext, useEffect } from "react";
import { useHistory } from "react-router";
import { useBoardDocList } from "../../hook/useBoardDoc";
import { ListInitOptions } from "../../hook/useListQuery";
import {
    boardDocList,
    boardDocListVariables,
    FboardDoc,
    _BoardFilter,
    _BoardSort,
} from "../../type/api";
import { yyyymmddHHmm } from "../../utils/dateFormat";
import { genrateOption } from "../../utils/query";
import Pagination from "../../component/pagination/Pagination";
import { useRouteMatch } from "react-router-dom";
import { useBoardFindByKey } from "../../hook/useBoard";
import { Paths } from "../../MainRouter";
import AppContext from "../../context";
import { JDcard } from "@janda-com/front";
import { SuperAppContext } from "../../superAdmin/helper/superContext";
import { BoardKeyKr } from "../../type/const";

interface IProp {
    listInitOption?: ListInitOptions<_BoardFilter, _BoardSort>;
    listOption?: genrateOption<boardDocList, boardDocListVariables>;
}

type IDetailRouteProp = {
    boardKey: string;
};

export const BoardDocList: React.FC<IProp> = ({
    listInitOption,
    listOption,
}) => {
    const { me } = useContext(AppContext);
    const { superMe } = useContext(SuperAppContext);
    const history = useHistory();
    const {
        params: { boardKey },
    } = useRouteMatch<IDetailRouteProp>();
    const { item: board } = useBoardFindByKey(boardKey);

    const { items, paginatorHook, setFilter, pageInfo } = useBoardDocList(
        {
            initialFilter: {
                boardKey__eq: boardKey,
            },
        },
        listOption
    );

    const hasWritePermission =
        !!superMe || board?.writePermission.includes(me!.role);
    const handleView = (item: FboardDoc) => () => {
        history.push(Paths.boardView + "/" + board!.key + "/" + item._id);
    };

    const handleToWrite = () => {
        history.push(Paths.boardWrite + "/" + board!.key);
    };

    useEffect(() => {
        setFilter({
            boardKey__eq: boardKey,
        });
    }, [boardKey]);

    return (
        <div>
            <JDpageHeader title={board?.name} desc={""} />
            <JDcontainer verticalPadding size={WindowSize.full}>
                <JDcard mb>
                    {items.map((item) => (
                        <Flex className="boardDocLine" vCenter key={item._id}>
                            <Thin mr="large">
                                {yyyymmddHHmm(item.createdAt)}
                            </Thin>
                            <Bold onClick={handleView(item)} hover mr="large">
                                {item.title || "타이틀 없음"}
                            </Bold>
                            <Small mr>{item.authorName}</Small>
                        </Flex>
                    ))}
                </JDcard>
                <JDbutton
                    hide={!hasWritePermission}
                    mb
                    onClick={handleToWrite}
                    label="글쓰기"
                />
                <Pagination
                    totalPageCount={pageInfo.totalPageCount}
                    {...paginatorHook}
                />
            </JDcontainer>
        </div>
    );
};

export default BoardDocList;
