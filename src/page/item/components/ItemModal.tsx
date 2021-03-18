import { InputText, JDtabs, IUseModal, JDbutton, JDmodal, JDsingleUploader, Tab, TabList, TabPanel, useInput, useSelect, opFind, JDselect } from '@janda-com/front';
import { cloneDeep } from 'lodash';
import React, { useContext, useEffect, useState } from 'react';
import ModalBtn from '../../../component/btns/ActBtn';
import { FormCreater } from '../../../component/formCreater/FormCreater';
import AppContext from '../../../context';
import { useAttributes } from '../../../hook/useAttributes';
import { useCopy } from '../../../hook/useCopy';
import { useItemCreate, useItemFindById, useItemUpdate } from '../../../hook/useItem';
import { useMultiUpload } from '../../../hook/useUpload';
import { ItemBookingCreateInput, ItemBookingUpdateInput } from '../../../type/api';
import { ITEM_TYPE_OPS } from '../../../type/const';

export interface IItemModalInfo {
    itemId: string;
}

interface IProp {
    modalHook: IUseModal<IItemModalInfo>;
}

export const ItemModal: React.FC<IProp> = ({ modalHook }) => {
    const [tap, setTap] = useState<"base" | "input">("base");
    const attributesHook = useAttributes();

    const { selectedStore } = useContext(AppContext)
    const itemId = modalHook.info?.itemId;
    const isCreateMode = !itemId;
    const { item: defaultItem } = useItemFindById(itemId)
    const [itemUpdate] = useItemUpdate();
    const [itemCreate] = useItemCreate();
    const [item, setItem] = useCopy(defaultItem);
    const priceHook = useInput(0);
    const uploads = useMultiUpload(item?.images)
    const nameHook = useInput("")
    const defaultTypeOp = opFind(defaultItem?.type, ITEM_TYPE_OPS)
    const itemTypeHook = useSelect(defaultTypeOp, ITEM_TYPE_OPS)
    const uploadHook = useMultiUpload()


    const nextData: ItemBookingCreateInput & ItemBookingUpdateInput = {
        attrs: [],
        tags: [],
        name: nameHook.value,
        price: priceHook.value,
        images: uploadHook.createInput,
    }


    const handleItemCreate = () => {
        itemCreate({
            variables: {
                input: {
                    ...nextData
                },
                storeId: selectedStore?._id
            }
        })
    }

    const handleItemUpdate = () => {
        itemUpdate({
            variables: {
                input: {
                    ...nextData
                },
                itemId: defaultItem?._id
            }
        })
    }

    useEffect(() => {
        if (!defaultItem) return;
        nameHook.onChange(defaultItem.name)
        priceHook.onChange(defaultItem.price)
        uploadHook.setFiles(defaultItem.images)
        itemTypeHook.onChange(defaultTypeOp || ITEM_TYPE_OPS[0])
        attributesHook.setAttributes(cloneDeep(defaultItem.attrs))
    }, [defaultItem?._id])

    console.log({ attributesHook })


    return <JDmodal head={{ title: "상품 정보" }} {...modalHook} >
        <JDtabs mb="large">
            <TabList>
                <Tab>기본정보</Tab>
                <Tab>인풋정보</Tab>
            </TabList>
            <TabPanel>
                <JDselect mb {...itemTypeHook} label="상품타입" />
                <InputText mb {...nameHook} label="상품이름" />
                <InputText mb comma {...priceHook} label="상품 기본 가격" />
                {/* <InputText mb textarea  {...descriptionHook} label="상품 " /> */}
            </TabPanel>
            <TabPanel>
                <FormCreater {...attributesHook} />
            </TabPanel>
        </JDtabs>
        <ModalBtn thema="primary" hide={!isCreateMode} onClick={handleItemCreate} label="생성하기" />
        <ModalBtn hide={isCreateMode} onClick={handleItemUpdate} label="업데이트" />
    </JDmodal>;
};
