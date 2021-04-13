import { InputText, Flex, JDbutton, useInput } from '@janda-com/front';
import React from 'react';
import { Empty } from '../../../../atom/Empty';
import { PurchaseBundleViewer } from '../../../../component/purchaseBunldeViewer/PurhcaseBundleViewer';
import { usePurchaseBundleFindByInfo } from '../../../../hook/usePurchase';

interface IProp { }

export const BuyPageCheck: React.FC<IProp> = () => {
    const nameHook = useInput("");
    const contactHook = useInput("");
    const name = nameHook.value;
    const phoneNumber = contactHook.value;
    const { data, getData, called } = usePurchaseBundleFindByInfo({
        skip: !name || !phoneNumber
    })

    const handleFind = () => {
        getData({
            variables: {
                contact: phoneNumber,
                name: name
            }
        })
    }
    return <div >
        <Flex mb>
            <InputText {...nameHook} mr label="성함" />
            <InputText {...contactHook} mr label="연락처" />
            <JDbutton onClick={handleFind} label="조회하기" />
        </Flex>
        {data && <PurchaseBundleViewer bundle={data} />}
        {called && !data && <Empty />}
    </div>;
};
