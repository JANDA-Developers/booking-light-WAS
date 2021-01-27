import { Flex, JDbutton, JDcard, JDcontainer, JDpageHeader, JDselect, JDtypho, WindowSize } from '@janda-com/front';
import React from 'react';
import { ProductCpacityTable } from './components/ProductCapcityTable';
import Product from "../productSetting/components/Product"
import { ICapcitpyWrapContext } from './ProductCapacityWrap';
import { useStoreSelect } from '../../hook/useStore';
import { JDicon } from '@janda-com/front';
interface IProp {
    context: ICapcitpyWrapContext
}

export const ProductCpacity: React.FC<IProp> = ({ context }) => {
    const storeSelectHook = useStoreSelect();
    const { productListHook } = context;
    const { items } = productListHook;

    return <JDcontainer size={WindowSize.full}>
        <JDpageHeader title={"상품설정"} desc={"판매 중인 상품의 상세 내용을 변경할 수 있습니다"} />
        <JDcard mode="border">
            <>
                <Flex vCenter between> <JDtypho>{storeSelectHook.selectedOption?.label}</JDtypho> <JDselect {...storeSelectHook} /></Flex>
                {items.map((item) => <Product {...item} key={item._id} />)}
            </>
        </JDcard>
        <Flex center>
            <JDbutton style={{
                height: "auto",
                lineHeight: 1.3,
            }} size="large" br="square" ><div><div>가격설정</div><JDicon size="tiny" icon="arrowDown" /></div></JDbutton>
        </Flex>
        <JDcard mode="border">
            <ProductCpacityTable />
        </JDcard>
    </JDcontainer>;
};
