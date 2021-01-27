import { useLazyQuery } from '@apollo/client';
import { Flex, IUseModal, JDdayPicker, JDlabel, JDmodal, JDselect, useDayPicker, Validater } from '@janda-com/front';
import { InputText } from '@janda-com/front';
import React, { useContext, useState } from 'react';
import { PRODUCT_FIND_ID } from '../../apollo/queries';
import AppContext from '../../context';
import { useItemCreate } from '../../hook/useItemCreate';
import { Currency, itemCreate_ItemCreate_data as INewItem, itemList_ItemList_items as IITem, Paymethod, productFindById, productFindByIdVariables } from "../../type/api";
import { DEFAULT_ITEM_CREATE } from '../../type/const';
import { completeMsg } from '../../utils/utils';
import { ModalBtn } from '../btns/ModalBtn';
import dayjs from "dayjs";

export interface ICreateSubmitInput {
    amount: number;
    productId: string;
    count: number,
    email: string,
    fromTm: any,
    toTm: any,
    message: string,
    name: string,
    phoneNumber: string,
}


interface IProp {
    modalHook: IUseModal;
    onSuccess: (item: INewItem) => void;
}


export const ItemCreateModal: React.FC<IProp> = ({ modalHook, onSuccess }) => {
    const { prodOptions } = useContext(AppContext)
    const dayPickerHook = useDayPicker(new Date(), new Date());
    const [data, setData] = useState<ICreateSubmitInput>(DEFAULT_ITEM_CREATE)
    const [getProduct, { data: productData, loading }] = useLazyQuery<productFindById, productFindByIdVariables>(PRODUCT_FIND_ID);

    const { itemCreate, createLoading } = useItemCreate({
        onCompleted: ({ ItemCreate }) => {
            const result = completeMsg(ItemCreate, "아이템 생성", "생성실패");
            if (result)
                onSuccess(ItemCreate.data!)
        }
    });

    function set<T extends keyof ICreateSubmitInput>(key: T) {
        return (value: any) => { setData({ ...data, [key]: value }) };
    }

    const {
        amount,
        count,
        email,
        fromTm,
        message,
        name,
        phoneNumber,
        toTm,
        productId
    } = data;

    const selectedProdOps = prodOptions.find(op => op.value === productId);

    const { validate } = new Validater([{
        value: !!productId,
        failMsg: "상품을 선택 바랍니다.",
        id: "count"
    }, {
        value: count > 0,
        failMsg: "수량은 0개 이상 선택 바랍니다.",
        id: "count"
    }, {
        value: !!email,
        failMsg: "이메일을 입력 해주세요.",
        id: "email"
    },
    {
        value: !!dayPickerHook.from?.valueOf(),
        failMsg: "판매 일자선택을 해주세요.",
        id: "from"
    },
    {
        value: !!message,
        failMsg: "예약메세지",
        id: "message"
    },
    {
        value: !!phoneNumber,
        failMsg: "핸드폰 번호를 입력 해주세요.",
        id: "phoneNumber"
    },
    {
        value: !!amount,
        failMsg: "가격을 입력 해주세요.",
        id: "amount"
    },
    ])

    const handleCreate = () => {
        if (!validate()) return;
        itemCreate({
            params: {
                count,
                fromTm,
                toTm,
                email,
                message,
                name,
                phoneNumber: "+82" + phoneNumber,
                payInfo: {
                    amount,
                    currency: Currency.KRW,
                    paymethod: Paymethod.CARD
                },
            },
            productId
        })
    }

    const prodPrice = productData?.ProductFindById?.price.toString() || "";

    return <JDmodal className="itemCreateModal" visibleOverflow loading={createLoading}  {...modalHook}
        head={{
            title: "새로운 예약 생성하기"
        }}
        foot={
            <Flex>
                <ModalBtn onClick={handleCreate}>예약생성</ModalBtn>
            </Flex>
        }
    >
        <JDselect mb="normal" label="상품선택" id="productId" onChange={(selectedOp) => {
            const productId = selectedOp.value;
            if (productId)
                getProduct({ variables: { productId } })
            set("productId")(selectedOp.value)
        }} selectedOption={selectedProdOps} options={prodOptions} />
        <div><JDlabel txt="이용일" /></div>
        <JDdayPicker isRange={false} {...dayPickerHook} mode="input" inputComponent={(prop) => <InputText mb="normal" id="from" {...prop} value={dayjs(dayPickerHook.from || new Date()).format("YYYY-MM-DD")} />} />
        <InputText onChange={set("email")} mb="normal" label="이메일" value={email} id="email" />
        <InputText onChange={set("phoneNumber")} mb="normal" label="핸드폰번호" value={phoneNumber} id="phoneNumber" />
        <InputText onChange={set("name")} mb="normal" label="이름" value={name} id="name" />
        <InputText onChange={set("message")} mb="normal" label="메세지" value={message} textarea id="message" />
        <InputText onChange={set("amount")} label="가격" placeholder={prodPrice} value={amount} id="amount" />
    </JDmodal>;
};
