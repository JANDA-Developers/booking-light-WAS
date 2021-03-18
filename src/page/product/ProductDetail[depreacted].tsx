import { Bold, DEFAULT_PAGINATION_SETTING, Flex, JDcontainer, JDpageHeader, JDpagination, Mb, useModal } from '@janda-com/front';
import React, { useContext, useState } from 'react';
import { useRouteMatch } from 'react-router-dom';
import AppContext from '../../context';
import { useItemFindById } from '../../hook/useItem';
import { generateClientPaging } from '../../utils/generateClinetPaging';
import { ItemCard } from '../item/components/ItemCard';
import { ProductCreater } from './component/ProductCreater';
import { IProductModalInfo, ProductCreateModal } from './component/ProductCreateModal';
import { ProductTable } from './component/ProductTable';
import { getProductDeleteHandle, useProductList } from '../../hook/useProduct';
import { BookingInput, Fproduct, itemFindById_ItemFindById, productList_ProductList_items } from '../../type/api';
import { useBookingsInput } from '../../hook/useBookingInput';
import { AttributeInput } from '../../component/formCreater/components/AttributeInput';
import { useCopy } from '../../hook/useCopy';




type IDetailRouteProp = { itemId: string }
interface IProp {
    item?: itemFindById_ItemFindById;
}

// 여기는 이제 캐파시티에 대한 선택내용이 있음.
// 그리고 그내용을 purchase까지 전달할 예정임.
// 전달방법은 장바구니에 담아두는 방식임.
// 장바구니에 저장된후 계속하기 또는 구매하기로 진행가능함.
export const ProductDetail: React.FC<IProp> = ({ item }) => {
    const paging = generateClientPaging(item?.products || [], 8);
    const productCreateModal = useModal<IProductModalInfo>()
    const { handleDelete } = getProductDeleteHandle()

    return <div>
        <JDpageHeader title="판매설정" desc="판매설정 페이지에서 품목을 어느만큼 언제 판매할지 결정합니다." />
        <JDcontainer verticalPadding>
            {/* <JDbutton mb onClick={handleCreate} hide={!isCreate} thema="primary">생성하기</JDbutton>
            <JDbutton mb onClick={handleEdit} hide={isCreate} thema="primary">수정하기</JDbutton> */}
            {item && <ItemCard
                item={item}
                head={<Flex vCenter><Bold mr="small">상품군</Bold>  {item.name}에 대한 상품설정</Flex>}
                mb
                foot={
                    <div>
                        <ProductTable handleEdit={(product) => {
                            productCreateModal.openModal({
                                itemId: product._itemId,
                                product: product as Fproduct
                            })
                        }} handleDelete={({ _id }) => { handleDelete(_id) }} products={paging.slice} />
                        <Mb />
                        <Flex center>
                            <JDpagination mb  {...DEFAULT_PAGINATION_SETTING} pageCount={paging.paging.totalPageSize} setPage={paging.setPage} marginPagesDisplayed={0} />
                        </Flex>
                    </div>
                }
            />}
            <ProductCreater item={item} itemId={item?._id} />
            <ProductCreateModal modalHook={productCreateModal} />
        </JDcontainer>
    </div>
};

export const ProductDetailWrap = () => {
    const routeMatch = useRouteMatch<IDetailRouteProp>();
    const { params: { itemId } } = routeMatch;
    const { item } = useItemFindById(itemId);

    return <ProductDetail key={item?._id} item={item} />
}

export default ProductDetailWrap;


// {/* <JDcard head="기본정보" mb>
// <JDlabel>판매기한</JDlabel>
// <DateWithTimePicker {...salesTimePicker} />
// {/* <JDlabel>판매수량</JDlabel> */}
// {/* <JDswitch mb ltxt="제한없음" rtxt="제한있음" /> */}
// {/* <JDselectCounter selectHook={selectHook} /> */}
// {/* <Mb /> */}
// {/* <InputText mb {...priceHook} comma label="가격" /> */}
// </JDcard>
// <JDcard head={<Flex vCenter between>사용시간 설정 <JDswitch checked rtxt="사용" /></Flex>} mb>
// <JDlabel>사용기간</JDlabel>
// <DateWithTimePicker {...useTimePicker} />
// </JDcard>
// <CapacityDetailEditor onChange={setCapacityDetails} usageDetails={capacityDetails} />
// <Mb />
// <JDbutton onClick={handleCreate} hide={!isCreate} thema="primary">생성하기</JDbutton>
// <JDbutton onClick={handleEdit} hide={isCreate} thema="primary">수정하기</JDbutton> */}
