import {
    Flex,
    JDcontainer,
    JDpageHeader,
    Mb,
    SkipUpdate,
    useModal,
    WindowSize,
} from "@janda-com/front";
import { useStoreList } from "../../hook/useStore";
import JDsearchBar from "../../atom/SearchBar";
import {
    _IUserFilter,
    _IUserSort,
    _StoreFilter,
    _StoreSort,
} from "../../type/api";
import Pagination from "../../component/pagination/Pagination";
import { SuperStoreTable } from "../components/SuperStoreTable";
import {
    IStoreModalInfo,
    StoreModal,
} from "../../page/store/components/StoreModal";

interface IProp {}

export const SuperStores: React.FC<IProp> = () => {
    const userListHook = useStoreList();
    const { items, getLoading, paginatorHook, pageInfo } = userListHook;
    const storeModalHook = useModal<IStoreModalInfo>();

    return (
        <div>
            <JDpageHeader title="스토어 리스트" desc="스토어 리스트." />
            <JDcontainer verticalPadding size={WindowSize.full}>
                <JDsearchBar<_StoreFilter, _StoreSort>
                    searchOps={[
                        {
                            label: "이름",
                            value: "name__eq",
                        },
                    ]}
                    {...userListHook}
                />
                <Mb />
                <SkipUpdate skip={getLoading}>
                    <SuperStoreTable
                        handleEdit={(store) => {
                            storeModalHook.openModal({
                                store,
                            });
                        }}
                        stroes={items}
                    />
                </SkipUpdate>
                <Mb />
                <Flex center>
                    <Pagination
                        {...paginatorHook}
                        totalPageCount={pageInfo.totalPageCount}
                    />
                </Flex>
                <StoreModal modalHook={storeModalHook} />
            </JDcontainer>
        </div>
    );
};

export default SuperStores;
