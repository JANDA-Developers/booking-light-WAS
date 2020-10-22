import React from 'react'
import dayjs from 'dayjs'
import { s4, useModal, JDcontainer, JDpageHeader, WindowSize, JDbutton, JDselect, JDdayPickerModal, useDayPicker, toast, JDcard, useSelect, Flex } from "@janda-com/front";
import ProductModal from './components/ProductModal';
import Product from './components/Product';
import ArrowDate from '../../atom/ArrowDate';
import { IProduct } from './interface';
import { IProductWrapContext } from './ProductSettingWrap';
import { createContext } from 'vm';

type TheadInfo = {
    title: string;
    desc: string;
}

type TproductSort = {
    label: string;
    value: string;
}


interface IProps {
    context: IProductWrapContext;
}

const SELECTOP = [{
    label: "",
    value: ""
}]


interface IProductSettingContext extends IProductWrapContext { }

const ProductSetting: React.FC<IProps> = ({ context: wrapContext }) => {
    const { createProduct, deleteProduct, filter, items, loading, page, pageInfo, setFilter, setPage, setSort, sort, updateProduct } = wrapContext;
    const productModalHook = useModal();
    const dateToday = new Date();
    const modalHook_add = useModal(false);
    const modalHook_cal = useModal();
    const dayPickerHook = useDayPicker(new Date(), new Date());
    const selectHook = useSelect(SELECTOP[0], SELECTOP);

    const handleAddProduct = () => {
        modalHook_add.openModal();
    };

    const changeDay = (next: boolean | 'today') => {
        const date = dayPickerHook.from || new Date();

        if (next === 'today') {
            dayPickerHook.setDate(dateToday);
            return;
        }

        if (next) {
            const newDate = dayjs(date).add(1, 'day').toDate();
            dayPickerHook.setDate(newDate);
            return;
        }

        if (dayjs(date).isBefore(dateToday, "d")) {
            toast.warn('오늘 이전으로 설정할 수 없습니다');
            return;
        }

        const newDate = dayjs(date).add(-1, 'day').toDate();
        dayPickerHook.setDate(newDate);
    }



    const contextValue = { ...wrapContext };
    const ProudctContext = React.createContext(contextValue);

    return (
        <ProudctContext.Provider value={contextValue}>
            <JDcontainer size={WindowSize.full}>
                <ProductModal onConfirm={() => {

                }} modalHook={productModalHook} />
                <JDdayPickerModal
                    {...dayPickerHook}
                    autoClose
                    isRange={false}
                    modalHook={modalHook_cal}
                />
                <div className="productSetting">
                    <JDpageHeader title={"상품설정"} desc={"판매 중인 상품의 상세 내용을 변경할 수 있습니다"} />
                    <div className="productSetting__content">
                        <JDcard mb mode="border">
                            <Flex between vCenter>
                                <section>
                                    <JDbutton mr thema="positive" label={'날짜선택'} className="productSetting__calendar productSetting__btn1"
                                        onClick={() => {
                                            modalHook_cal.openModal();
                                        }}
                                    />
                                    <JDbutton mode="border" thema="primary" label={'오늘'} className="productSetting__today productSetting__btn1"
                                        onClick={() => { changeDay('today') }}
                                    />
                                </section>
                                <ArrowDate onChangeDate={(plus) => {
                                    changeDay(plus);
                                }} date={dayPickerHook.from || new Date()} />
                                <section>
                                    <JDselect
                                        autoSize
                                        {...selectHook}
                                    />
                                </section>
                            </Flex>
                        </JDcard>
                        {
                            items.map((product, index) => {
                                return <Product
                                    {...product}
                                    _id={s4()}
                                    key={index + "pi"}
                                />
                            })
                        }
                    </div>
                </div>
            </JDcontainer>
        </ProudctContext.Provider>
    )
}

export default ProductSetting