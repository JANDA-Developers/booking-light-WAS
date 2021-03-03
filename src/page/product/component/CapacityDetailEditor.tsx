import { InputText, autoComma, JDcard, JDtypho, Bold, JDhorizen, Mb, JDlabel, Small, Flex } from '@janda-com/front';
import { toNumber } from 'lodash';
import React, { useEffect } from 'react';
import { CardBtn } from '../../../component/btns/ModalBtn';
import { JDicon } from '../../../component/icons/Icons';
import { SelectCounter } from '../../../component/selectCounter/SelectCounter';
import { Fcapacity } from '../../../type/api';

interface IProp {
    usageDetails: Fcapacity[]
    onChange: (usageDetails: Fcapacity[]) => void;
}

export const CapacityDetailEditor: React.FC<IProp> = ({ usageDetails, onChange }) => {

    const handleChange = (detail: Fcapacity, key: keyof Fcapacity) => (v: any) => {

        let _v = v;
        if (key === "price") {
            _v = toNumber(v);
        }
        // @ts-ignore
        detail[key] = _v;

        onChange([...usageDetails])
    }


    const handleAdd = () => {
        usageDetails.push({
            __typename: "Capacity",
            count: 0,
            key: "",
            label: "",
            price: 0
        })

        onChange([...usageDetails]);
    }

    const handleDelete = (key: string) => () => {
        const details = usageDetails.filter(ud => ud.key !== key)
        onChange([...details]);
    }

    useEffect(() => {
        if (!usageDetails.length) {
            handleAdd();
        }
    }, [usageDetails.length])

    return <JDcard className="capacityDetailEditor" head={"가격/수량 설정"} foot={
        <CardBtn br="square" thema="grey4" onClick={handleAdd}>추가항목 만들기</CardBtn>
    }  >
        <>
            {usageDetails.map((detail, index) => <JDcard head={<Flex between><Small>{index ? "추가항목" : "대표항목"}</Small> {index !== 0 && <JDicon size="superTiny" onClick={handleDelete(detail.key)} hover icon="close" />} </Flex>} className="capacityDetailEditor__detailBox" mb mode="border" key={detail.key}>
                {/* {index !== 0 && <JDhorizen margin={3} />} */}
                <InputText mb label={`품명`} onChange={handleChange(detail, "label")} value={detail.label} />
                <InputText mb comma onChange={handleChange(detail, "price")} value={detail.price} label="가격" />
                <SelectCounter mb selectProps={{ menuPlacement: "top" }} label="수량" count={detail.count} onChange={handleChange(detail, "count")} />
            </JDcard>)}
        </>
    </JDcard>;
};
