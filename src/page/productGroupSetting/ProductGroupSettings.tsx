import { autoComma, Flex, JDbutton, JDcard, JDcontainer, JDpageHeader, JDphotoFrame, JDselect, JDtypho, useDayPicker, useModal, WindowSize } from '@janda-com/front';
import { JDcolumn, JDtable } from '@janda-com/janda-table';
import { isEmpty } from 'lodash';
import React from 'react';
import { DateChangeHeader } from '../../component/dateChangeHeader/DateChangeHeader';
import DotButton from '../../component/dotButton/DotButton';
import { productGroupList_ProductGroupList_items as IProductGroup, productGroupList_ProductGroupList_items_list as IList } from '../../type/api';
import { GroupManageModal } from './components/GroupManageModal';
import { GroupContext } from './context';
import { IProductGroupWrapContext } from "./ProductGorupSettingWrap";

interface IProp {
    context: IProductGroupWrapContext;
}

export const ProductGroupSetting: React.FC<IProp> = ({ context }) => {
    const dayPickerHook = useDayPicker(null, null);
    const {
        groupLoading,
        storeSelectHook,
        productGetLoading,
        productGroupCreate,
        productGroupDelete,
        productGroupOpsHook,
        productGroupUpdate,
        productHook
    } = context;
    const { selectedOption } = storeSelectHook;
    const calModalHook = useModal();
    const groupManageModal = useModal();

    const { items: products, setFilter: setProductFilter } = productHook;
    const { items: groups } = productGroupOpsHook;


    const handleSelectGroup = () => {
        setProductFilter({
            _id_in: [""]
        })
    }


    const columns: JDcolumn<IList>[] = [
        {
            Header: () => <div>상품명</div>,
            accessor: 'code',
            Cell: ({ original }) => {
                return <div>
                    <JDphotoFrame src={original.images?.[0]?.uri} />
                    {original.name}
                </div>;
            },
        },
        {
            Header: () => <div>정보</div>,
            accessor: 'name',
            Cell: ({ original }) => {
                return <div>{original.description}</div>;
            },
        },
        {
            Header: () => <div>기본가격</div>,
            accessor: 'price',
            Cell: ({ original }) => {
                return <div>{autoComma(original.price)}</div>;
            },
        },
        // {
        //     Header: () => <div>생성일시</div>,
        //     accessor: 'createAt',
        //     Cell: ({ original }) => {
        //         const { name } = original.product;
        //         return <div>{name}</div>;
        //     },
        // },
    ];

    const contextValue = { ...context };

    return <GroupContext.Provider value={contextValue}>
        <JDcontainer size={WindowSize.full}>
            <JDpageHeader title={"상품설정"} desc={"판매 중인 상품의 상세 내용을 변경할 수 있습니다"} />
            <DotButton mb="normal" onClick={() => {
                groupManageModal.openModal({
                    mode: "create",
                })
            }}>그룹 생성/관리
            </DotButton>
            <JDcard mb mode="border">
                {isEmpty(groups) ? <JDtypho color="grey2">생성해둔 그룹이 없습니다. 구룹추가를 진행 해주세요.</JDtypho> :
                    groups.map((item) => <JDbutton key={item._id} onClick={handleSelectGroup} thema={"grey4"} mr="small" >{item.name}</JDbutton>)}
            </JDcard>
            <JDcard>
                <Flex vCenter between mb="small"><JDtypho>{selectedOption?.label}</JDtypho> <JDselect {...storeSelectHook} /> </Flex>
                <JDbutton mb br="square" thema="grey4">그룹변경</JDbutton>
                <JDtable data={products} columns={columns} />
            </JDcard>

            <GroupManageModal modalHook={groupManageModal} />
        </JDcontainer>
    </GroupContext.Provider>
};
