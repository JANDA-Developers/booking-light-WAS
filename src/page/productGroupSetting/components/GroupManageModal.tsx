import { IUseModal, JDbutton, JDmodal, useModal } from '@janda-com/front';
import React, { useContext } from 'react';
import { productGroupOps_ProductGroupList_items as TGroup } from '../../../type/api';
import { GroupContext } from '../context';
import { GroupEditModal, TGroupEditModalInfo } from './GroupEditModal';
import GroupLi from './GroupLi';

interface IProp {
    modalHook: IUseModal;
}

export const GroupManageModal: React.FC<IProp> = ({ modalHook }) => {
    const { productGroupOpsHook, productGroupDelete } = useContext(GroupContext);
    const { items: groups } = productGroupOpsHook;
    const editModalHook = useModal<TGroupEditModalInfo>();

    const handleDelete = (productGroupId: string) => {
        productGroupDelete({
            productGroupId
        })
    }

    const handleEdit = (productGroup: TGroup) => {
        editModalHook.openModal({
            mode: "update",
            productGroup
        })
    }

    const handleAddGroup = () => {
        editModalHook.openModal({
            mode: "create"
        })
    }

    return <JDmodal head={{
        title: "그룹 생성/관리"
    }} {...modalHook} >
        <JDbutton onClick={handleAddGroup} mb size="long" mode="border">새그룹생성</JDbutton>
        <div className="JDscrollbar">
            {groups.map(g =>
                <GroupLi key={g._id} name={g.name} handleEdit={() => {
                    handleEdit(g)
                }} handleDelete={() => { handleDelete(g._id) }} />
            )}
        </div>
        <GroupEditModal key={editModalHook.info?.productGroup?._id + "groupEditModal"} modalHook={editModalHook} />
    </JDmodal>;
};
