import { IUseModal, JDtagInput, JDlabel, JDmodal, useInput } from '@janda-com/front';
import { InputText } from '@janda-com/front';
import React, { useContext, useMemo, useState } from 'react';
import { ModalBtn } from '../../../component/btns/ModalBtn';
import { useProductps } from '../../../hook/useProductps';
import { GroupContext } from '../context';
import { useTagInput } from "../../../hook/useTagInput";
import { productGroupOps_ProductGroupList_items } from '../../../type/api';
import Configer from '../../../component/configer/Configer';


export type TGroupEditModalInfo = {
    productGroup?: productGroupOps_ProductGroupList_items
    mode: "create" | "update"
}

interface IProp {
    modalHook: IUseModal<TGroupEditModalInfo>;
}


type TOrigin = {
    _id: string;
    name: string;
}

export const GroupEditModal: React.FC<IProp> = ({ modalHook }) => {
    const { productGroupCreate, productGroupUpdate, storeSelectHook } = useContext(GroupContext)
    const { selectedStoreId: storeId } = storeSelectHook;
    const { items: allItems } = useProductps();
    const unableFilterHook = useInput("");
    const enableFilterHook = useInput("");
    const productGroup = modalHook.info?.productGroup;

    const tagHook = useTagInput();
    const descriptionHook = useInput("");
    const nameHook = useInput<string>(productGroup?.name || "");

    const defaultEnables = productGroup?.list.map(item => item._id);
    const mode = modalHook.info?.mode;
    const createMode = mode === "create";
    const allItemsOps = allItems.map(item => ({ _id: item._id, name: item.name }));
    const [enalbePids, setEnablePids] = useState<string[]>(defaultEnables || []);

    const getListIdToRemove = () => {
        const enableIds = enalbePids;
        if (!defaultEnables) throw Error(".")
        //오리지널에서 없어진 것들 감지
        return defaultEnables.filter(item => !enableIds.includes(item));
    }
    const getListIdToAdd = () => {
        const enableIds = enalbePids;
        if (!defaultEnables) throw Error(".")
        //오리지널에 없는 것들 감지
        return enableIds.filter(item => !defaultEnables.includes(item));
    }

    const handleAddGroup = () => {
        productGroupCreate({
            params: {
                name: nameHook.value,
                productIds: enalbePids,
                description: descriptionHook.value,
                hashTags: tagHook.tags
            },
            storeId
        })
    }

    const handleEditGroup = () => {
        if (!productGroup) throw Error("productGroup is not exsist but Edit Requested");
        const { _id: productGroupId } = productGroup;
        productGroupUpdate({
            params: {
                description: descriptionHook.value,
                hashTags: tagHook.tags,
                listIdToAdd: getListIdToAdd(),
                listIdToRemove: getListIdToRemove()
            },
            productGroupId
        })
    }

    return <JDmodal foot={<div>
        <ModalBtn onClick={createMode ? handleAddGroup : handleEditGroup}>그룹추가</ModalBtn>
    </div>} head={{
        title: createMode ? "새 그룹추가" : `그룹 ${productGroup?.name} 수정`
    }} {...modalHook} >
        <InputText {...nameHook} mb label="그룹명" />
        <JDlabel>상품목록</JDlabel>
        <Configer
            mb
            unableFilter={(name) => name.includes(unableFilterHook.value)}
            enableFilter={(name) => name.includes(enableFilterHook.value)}
            enableHeader={<InputText label="그룹상품" {...enableFilterHook} />}
            unableHeader={<InputText label="전체상품" {...unableFilterHook} />}
            allItem={allItemsOps}
            enableIds={enalbePids}
            onEnableChange={(enableItems) => {
                setEnablePids(enableItems)
            }} />
        <InputText label="설명" mb textarea {...descriptionHook} />
        <JDlabel>태그</JDlabel>
        <JDtagInput {...tagHook} />
    </JDmodal>;
};
