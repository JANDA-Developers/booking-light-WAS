import { InputText, JDcheckBox, Flex, JDtypho, useCheckBox, useInput, Large } from '@janda-com/front';
import { ISet } from '@janda-com/front/dist/types/interface';
import React, { useState } from 'react';
import { DeliveryInput } from '../../type/api';
import { AddressInput } from '../addressInput/AddressInput';



interface IProp {
    input: DeliveryInput,
    setInput: ISet<DeliveryInput>,
}

export const DeliveryInfoForm: React.FC<IProp> = ({ input, setInput }) => {
    const { address, addressDetail, receiverName, receiverPhone, receiverSmaeWithBuyer } = input;
    return <div >
        <JDtypho mb flex={{ vCenter: true }}><Large mr>배송지정보</Large>  <JDcheckBox size="small" label="주문자와 같습니다." onChange={() => {
            input.receiverSmaeWithBuyer = !receiverSmaeWithBuyer;
            setInput({ ...input });
        }} checked={receiverSmaeWithBuyer} /> </JDtypho>
        <Flex mb>
            <InputText readOnly={receiverSmaeWithBuyer} id="ReceiverNameInput" mr label="수령인" onChange={(val: any) => {
                input.receiverName = val
                setInput({ ...input });
            }} value={receiverName} />
            <InputText readOnly={receiverSmaeWithBuyer} id="ReceiverPhoneInput" onChange={(val: any) => {
                input.receiverPhone = val;
                setInput({ ...input });
            }} value={receiverPhone} hyphen label="연락처" />
        </Flex>
        <AddressInput
            modalProps={{
                head: {
                    title: "배송지 검색하기"
                }
            }}
            id="AddressInput"
            inputProps={{ label: "배송지" }} mb address={address} setAddress={(address) => {
                input.address = address
                setInput({ ...input });
            }} />
        <InputText id="AddressDetailInput" label="상세주소" value={addressDetail} onChange={(val: any) => {
            input.addressDetail = val;
            setInput({ ...input });
        }} />
    </div>;
};
