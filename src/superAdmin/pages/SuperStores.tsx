import { Flex, JDcontainer, JDpageHeader, Mb, SkipUpdate, WindowSize } from '@janda-com/front';
import { useStoreList } from '../../hook/useStore';
import JDsearchBar from "../../atom/SearchBar"
import { _IUserFilter, _IUserSort, _StoreFilter, _StoreSort } from '../../type/api';
import Pagination from "../../component/pagination/Pagination";
import { SuperStoreTable } from '../components/SuperStoreTable';

interface IProp { }

export const SuperStores: React.FC<IProp> = () => {
    const userListHook = useStoreList();
    const { items, getLoading, paginatorHook, pageInfo } = userListHook;
    return <div><JDpageHeader title="스토어 리스트" desc="스토어 리스트." />
        <JDcontainer verticalPadding size={WindowSize.full}>
            <JDsearchBar<_StoreFilter, _StoreSort> searchOps={[{
                label: "이름",
                value: "name__eq"
            }]}  {...userListHook} />
            <Mb />
            <SkipUpdate skip={getLoading}>
                <SuperStoreTable products={items} />
            </SkipUpdate>
            <Mb />
            <Flex center>
                <Pagination  {...paginatorHook} totalPageCount={pageInfo.totalPageCount} />
            </Flex>
        </JDcontainer>
    </div>
};

export default SuperStores;