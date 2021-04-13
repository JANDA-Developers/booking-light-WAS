import { autoComma, JDbutton, JDcard, Small } from "@janda-com/front";
import { IJDcardProps } from '@janda-com/front/dist/components/cards/Card';
import React from 'react';
import { Info } from "../../atom/Info";
import { FservicePlanTemplate } from "../../type/api";
import { yyyymmddHHmm } from "../../utils/dateFormat";
import { CardBtn } from "../btns/ModalBtn";

interface IProp extends IJDcardProps {
    template: FservicePlanTemplate
    isAdmin?: boolean;
}

export const ServiceCard: React.FC<IProp> = ({ template, isAdmin, ...props }) => {
    return <JDcard head={template.name} {...props} >
        <Info mb label="생성일" value={yyyymmddHHmm(template.createdAt)} />
        <Info mb label="가격" value={autoComma(template.price)} />
        <Info mb label="결제주기" value={autoComma(template.billingFrequency) + "달"} />
        <Small>
            {template.description}
        </Small>
    </JDcard>;
};
