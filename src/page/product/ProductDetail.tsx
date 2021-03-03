import { cloneDeep } from '@apollo/client/utilities';
import { Bold, Flex, InputText, JDbutton, JDcard, JDcontainer, JDlabel, JDpageHeader, JDswitch, Mb, opFind, toast, toNumber, useInput, useSelect, WindowSize } from '@janda-com/front';
import React, { useContext, useState } from 'react';
import { useHistory, useRouteMatch } from 'react-router-dom';
import { CardBtn } from '../../component/btns/ModalBtn';
import { DateWithTimePicker } from '../../component/dateWithTimePicker/DateWithTimePicker';
import AppContext from '../../context';
import { useDateTimepicker } from '../../hook/useDateTimePicker';
import { useProductCreate, useProductFindById, useProductUpdate } from '../../hook/useProduct';
import { Paths } from '../../MainRouter';
import { Fproduct, Fproduct_capacityDetails, itemFindById_ItemFindById, ProductBookingCreateInput, productFindById_ProductFindById } from '../../type/api';
import { COUNT, today, tomorrow } from '../../type/const';
import { omits } from '../../utils/omits';
import { CapacityDetailEditor } from './component/CapacityDetailEditor';
import { ProductCreater } from './component/ProductCreater';
import dayjs from "dayjs";
import { ItemCard } from '../item/components/ItemCard';
import { useItemFindById } from '../../hook/useItem';
import { Page404 } from '../exceptions/Page404';
import { ProductStatusSummaryCard } from '../dashboard/components/ProductStateSummary';
import { ProductSummaryCard } from '../dashboard/components/ProductSummaryCard';

type IDetailRouteProp = { itemId?: string, productId?: string }
interface IProp {
    product?: productFindById_ProductFindById
    itemId?: string;
}

export const ProductDetail: React.FC<IProp> = ({ itemId, product }) => {
    const { me } = useContext(AppContext);
    const isCreate = !product;
    const history = useHistory();
    const defaultCapacity = opFind(product?.capacity || 0 as any, COUNT)
    const selectHook = useSelect(defaultCapacity, COUNT);
    const { dateRangeForUse, dateRangeForSale } = product || {};
    const [createProd] = useProductCreate({
        onCompleted: ({ ProductBookingCreate }) => {
            if (ProductBookingCreate.ok) {
                toast("상품이 생성 되었습니다.")
                // history.push(Paths.productList);
            }
        }
    });
    const [updateProd] = useProductUpdate({
        onCompleted: ({ ProductBookingUpdate }) => {
            if (ProductBookingUpdate.ok) {
                toast("상품이 업데이트 되었습니다.")
                history.push(Paths.productList);
            }
        }
    });
    const priceHook = useInput(0);
    const [capacityDetails, setCapacityDetails] = useState<Fproduct_capacityDetails[]>(cloneDeep(product?.capacityDetails || []))
    const salesTimePicker = useDateTimepicker({
        defaultEnd: dayjs(dateRangeForSale?.to || tomorrow).toDate(),
        defaultStart: dayjs(dateRangeForSale?.from || today).toDate()
    })
    const useTimePicker = useDateTimepicker({
        defaultEnd: dayjs(dateRangeForUse?.to || tomorrow).toDate(),
        defaultStart: dayjs(dateRangeForUse?.from || today).toDate()
    })

    const nextData: ProductBookingCreateInput = omits({
        capacityDetails,
        capacity: selectHook.selectedOption?.value,
        price: toNumber(priceHook.value),
        dateRangeForSale: {
            from: salesTimePicker.startDate?.valueOf(),
            to: salesTimePicker.endDate?.valueOf()
        },
        dateRangeForUse: {
            from: dateRangeForSale?.from?.valueOf(),
            to: dateRangeForSale?.to?.valueOf()
        },
    })

    const handleCreate = () => {
        createProd({
            variables: {
                input: nextData,
                itemId
            }
        })
    }

    const handleEdit = () => {
        updateProd({
            variables: {
                input: nextData,
                productBookingId: product?._id
            }
        })
    }

    console.log({ product });

    return <div>
        <JDpageHeader title="상품설정" desc=" 등록하세요." />
        <JDcontainer verticalPadding>
            <JDbutton mb onClick={handleCreate} hide={!isCreate} thema="primary">생성하기</JDbutton>
            <JDbutton mb onClick={handleEdit} hide={isCreate} thema="primary">수정하기</JDbutton>
            {product && <ItemCard
                item={product?.item}
                foot={<ProductSummaryCard head="현재 상품상황" mode="border" />}
                head={<Flex vCenter><Bold mr="small">상품군</Bold>  {product?.item.name}에 대한 상품설정</Flex>}
                mb
            />
            }
            <JDcard head="기본정보" mb>
                <JDlabel>판매기한</JDlabel>
                <DateWithTimePicker {...salesTimePicker} />
                {/* <JDlabel>판매수량</JDlabel> */}
                {/* <JDswitch mb ltxt="제한없음" rtxt="제한있음" /> */}
                {/* <JDselectCounter selectHook={selectHook} /> */}
                {/* <Mb /> */}
                {/* <InputText mb {...priceHook} comma label="가격" /> */}
            </JDcard>
            <JDcard head={<Flex vCenter between>사용시간 설정 <JDswitch checked rtxt="사용" /></Flex>} mb>
                <JDlabel>사용기간</JDlabel>
                <DateWithTimePicker {...useTimePicker} />
            </JDcard>
            <CapacityDetailEditor onChange={setCapacityDetails} usageDetails={capacityDetails} />
            <Mb />
            <JDbutton onClick={handleCreate} hide={!isCreate} thema="primary">생성하기</JDbutton>
            <JDbutton onClick={handleEdit} hide={isCreate} thema="primary">수정하기</JDbutton>
        </JDcontainer>
    </div>
};

export const ProductDetailWrap = () => {
    const foo = useRouteMatch<IDetailRouteProp>();
    const { params: { productId, itemId } } = foo;
    const pid = productId === "create" ? undefined : productId;
    const { item: defaultItem } = useProductFindById(pid);

    return <ProductDetail key={defaultItem?._id} product={defaultItem} itemId={itemId} />
}

export default ProductDetailWrap;
