import { Flex, IUseModal, JDbutton, JDdayPicker, JDdoubleInputRange, JDlabel, JDmodal, useDayPicker, Validater } from '@janda-com/front';
import React from 'react';
import { JDicon } from '@janda-com/front';
import { ModalBtn } from 'src/component/btns/ModalBtn';
import DateRange from 'src/component/dateRange/DateRange';
import { PeriodInput } from 'src/type/api';
import JDlist from 'src/component/list/List';

interface IProp {
    modalHook: IUseModal;
    salesPeriod: PeriodInput[];
    onDelete: (index: number) => void;
    onAdd: (from: Date, to: Date) => void;
}

export const SalesPeriodModal: React.FC<IProp> = ({ modalHook, salesPeriod, onAdd, onDelete }) => {
    const dayPickerHook = useDayPicker(null, null);

    const addValidate = new Validater([{
        value: !!dayPickerHook.from && !!dayPickerHook.to,
        failMsg: "기간을 입력 해주세요.",
        id: "dateForm"
    }])

    const handleDelete = (index: number) => {
        onDelete(index)
    }

    const handleAdd = () => {
        if (!addValidate.validate()) return;

        onAdd(dayPickerHook.from!, dayPickerHook.to!)
        // dayPickerHook.setFrom(null);
        // dayPickerHook.setTo(null);
    }

    const handleApply = () => {
        modalHook.closeModal();
    }
    const handleCancel = () => {
        modalHook.closeModal();
    }

    return <JDmodal visibleOverflow foot={<div>
        <ModalBtn mr onClick={handleApply}>확인</ModalBtn>
        <ModalBtn onClick={handleCancel}>취소</ModalBtn>
    </div>} head={{
        title: "판매기간 관리"
    }} {...modalHook} >
        <JDlabel>판매기한 리스트</JDlabel>
        <JDlist mb height={150} border minList={8} lineHeight={5} stripe contents={salesPeriod?.map((period, index) => <DateRange
            to={period.toTm}
            from={period.fromTm}
            Icons={
                <JDicon hover icon="close" onClick={() => { handleDelete(index) }} />
            } />
        )}>
        </JDlist>
        <Flex>
            <JDdayPicker mr mb="normal" {...dayPickerHook} mode="input" inputComponent={(prop) => {
                return <JDdoubleInputRange  {...prop} id="salesPeriod" dayPickerHook={dayPickerHook} />
            }} />
            <JDbutton onClick={handleAdd} size="small" padding="tiny" br="square" mode="border">추가하기</JDbutton>
        </Flex>
    </JDmodal>
};

export default SalesPeriodModal;