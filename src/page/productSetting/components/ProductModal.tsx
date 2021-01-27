import { fromToRender, IUseModal, JDbutton, JDdayPicker, JDlabel, JDmodal, JDtypho, Thin, useDayPicker, useInput, useModal, Validater } from '@janda-com/front';
import { InputText, JDdoubleInputRange } from '@janda-com/front';
import { isEmpty, toNumber } from 'lodash';
import React, { useState } from 'react';
import JDlist from 'src/component/list/List';
import { ScrollBox } from 'src/component/scrollBox/ScrollBox';
import { ModalBtn } from '../../../component/btns/ModalBtn';
import { productCreateVariables, productUpdateVariables, productDeleteVariables, PeriodInput } from '../../../type/api';
import { IProduct } from '../interface';
import { getDefaults } from './helper';
import SalesPeriodModal from './SalesPeriodModal';

type TMode = "create" | "update"
type TAction = TMode | "delete";

interface IProductInfo extends Partial<IProduct> {
}

const DEFAULT: IProductInfo = process.env.NODE_ENV === "development" ? {
    name: "테스트",
    description: "In publishing and graphic design, Lorem ipsum is a placeholder text",
    capacity: 10,

} : {}

export type TProductModalInfo = {
    mode: TAction,
    product?: IProductInfo
}

interface IProp {
    modalHook: IUseModal<TProductModalInfo>
    storeId: string;
    onCreate: (info: productCreateVariables) => void;
    onDelete: (info: productDeleteVariables) => void;
    onUpdate: (info: productUpdateVariables) => void;
}

export const ProductModal: React.FC<IProp> = ({ modalHook, storeId, onCreate, onDelete, onUpdate }) => {
    if (!modalHook.info) throw Error("You should provide Info");
    const { product, mode } = modalHook.info;

    const { defaultPeriods, defaultProducts } = getDefaults(product);

    const SalesPeriodModalHook = useModal();
    const [salesPeriods, setSalesPeriods] = useState<PeriodInput[]>(defaultPeriods);
    const [data, setData] = useState<IProductInfo>({
        ...defaultProducts,
    })

    const hasSalesPeriod = !isEmpty(salesPeriods);


    const { _id, price, name, subtitle, description, capacity } = data;


    function set<T extends keyof IProductInfo>(key: T, value: IProductInfo[T]) {
        setData({ ...data, [key]: value });
    }

    const isCreate = mode === "create";

    const { validate } = new Validater([{
        value: !!name,
        failMsg: "상품 명을 입력 해주세요.",
        id: "productName"
    }, {
        value: !!price,
        failMsg: "가격을 입력하시길 바랍니다.",
        id: "productPrice"
    }, {
        value: !!capacity,
        failMsg: "판매 수량을 입력 해주시길 바랍니다.",
        id: "productCpacity"
    }])

    const handleCreate = () => {
        if (validate())
            onCreate({
                params: {
                    capacity: toNumber(capacity)!,
                    description: description || "",
                    name: name!,
                    subtitle: subtitle!,
                    price: toNumber(price)!,
                    selectableMinutesMax: 1440
                },
                storeId
            })

    }

    const handleUpdate = () => {
        if (validate())

            onUpdate({
                id: _id,
                params: {
                    description,
                    name,
                    subtitle,
                    salesPeriods
                }
            })
    }

    const handleAddPeriod = (from: Date, to: Date) => {
        const newPeriod = {
            fromTm: from.valueOf(),
            toTm: to.valueOf()
        }

        salesPeriods.push(newPeriod)
        setSalesPeriods([...salesPeriods])
    }

    const handleDeletePeriod = (index: number) => {
        salesPeriods?.splice(index, 1);
        setSalesPeriods([...salesPeriods || []])
    }

    return <JDmodal visibleOverflow head={{
        title: "부가상품 추가하기"
    }}
        foot={
            <div>
                <ModalBtn mr onClick={() => {
                    isCreate ? handleCreate() : handleUpdate();
                }}>
                    {isCreate ? "생성하기" : "수정하기"}
                </ModalBtn>
                <ModalBtn hide={!isCreate} thema="error" >
                    삭제하기
                </ModalBtn>
            </div>}
        {...modalHook}>

        <InputText mb id="productName" label="상품명" value={name} onChange={(v: any) => { set("name", v) }} />
        <InputText mb id="productSubTitle" label="부제목" value={subtitle} onChange={(v: any) => { set("subtitle", v) }} />

        <div>
            <JDlabel>판매기한</JDlabel>
        </div>
        <JDbutton mb="tiny" mode="flat" br="square" thema="grey4" onClick={SalesPeriodModalHook.openModal}>
            판매기한 설정하기
        </JDbutton>
        <JDlist align="center" border stripe minList={0} contents={salesPeriods?.map(sales => fromToRender(sales.fromTm, sales.toTm))} maxHeight={100} lineHeight={5} mb="small">
        </JDlist>
        {hasSalesPeriod || <Thin size="small" color="grey3" mb>비워둘시 제한없음</Thin>}

        <InputText mb id="productCpacity" label="판매수량" value={capacity || 0} onChange={(v: any) => { set("capacity", v) }} />
        <InputText mb id="productPrice" label="금액" comma value={price} onChange={(v: any) => { set("price", v) }} />
        <InputText mb id="productDesc" label="설명" value={description || ""} onChange={(v: any) => { set("description", v) }} />
        <SalesPeriodModal modalHook={SalesPeriodModalHook} salesPeriod={salesPeriods} onAdd={handleAddPeriod} onDelete={handleDeletePeriod} />
    </JDmodal>;
};

export default ProductModal;
