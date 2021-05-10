import { Flex, JDcard } from "@janda-com/front";
import { JDcardProps } from "@janda-com/front/dist/components/cards/Card";
import React from "react";
import { Info } from "../../atom/Info";
import { yyyymmddHHmm } from "../../utils/dateFormat";

interface IProp extends JDcardProps {
    bankName: string;
    bankAccount: string;
    bankHolder: string;
    expireAt?: Date;
}

export const BankHolderViewer: React.FC<IProp> = ({
    children,
    bankAccount,
    bankHolder,
    bankName,
    ...props
}) => {
    return (
        <JDcard mode="border" {...props}>
            <div>
                <Flex vCenter>
                    <Info mr label="은행" value={bankName} />
                    <Info mr label="계좌번호" value={bankAccount} />
                    <Info label="계좌주" value={bankHolder} />
                </Flex>
                {children}
            </div>
        </JDcard>
    );
};

export const BankHolderViewerWideMode: React.FC<IProp> = ({
    expireAt,
    children,
    bankAccount,
    bankHolder,
    bankName,
    ...props
}) => {
    return (
        <div>
            <Flex column>
                <Info mb between label="은행" value={bankName} />
                <Info mb between label="계좌번호" value={bankAccount} />
                <Info mb between label="계좌주" value={bankHolder} />
                <Info between label="입금만료" value={yyyymmddHHmm(expireAt)} />
            </Flex>
            {children}
        </div>
    );
};
