import React from 'react'
import { s4, useModal, JDcontainer, JDpageHeader, WindowSize, JDselect, JDdayPickerModal, useDayPicker, JDcard, useSelect } from "@janda-com/front";
import ProductModal from './components/ProductModal';
import Product from './components/Product';
import { IProductWrapContext } from './ProductSettingWrap';
import { TProductModalInfo } from "./components/ProductModal"
import { DateChangeHeader } from '../../component/dateChangeHeader/DateChangeHeader';
import DotButton from '../../component/dotButton/DotButton';
import { productCreateVariables, productUpdateVariables, productDeleteVariables } from "../../type/api"

interface IProps {
    context: IProductWrapContext;
}

const SELECTOP = [{
    label: "",
    value: ""
}]

const today = new Date();

interface IProductSettingContext extends IProductWrapContext { }

const ProductSetting: React.FC<IProps> = ({ context: wrapContext }) => {
    const {
        productCreate,
        productUpdate,
        productDelete,
        storeSelectHook,
        items,
    } = wrapContext;


    const selectedStore = storeSelectHook.selectedOption?.value || "";
    const productModalHook = useModal<TProductModalInfo>(false, {
        mode: "create",
    });
    const modalHook_add = useModal(false);
    const calModalHook = useModal();
    const dayPickerHook = useDayPicker(new Date(), new Date());

    const handleAddProduct = () => {
        modalHook_add.openModal();
    };


    const handleCreate = (info: productCreateVariables) => {
        productCreate(info, productModalHook.closeModal)
    }

    const handleUpdate = (info: productUpdateVariables) => {
        productUpdate(info, productModalHook.closeModal)
    }

    const handleDelete = (info: productDeleteVariables) => {
        productDelete(info, productModalHook.closeModal)
    }


    const contextValue = { ...wrapContext };
    const ProudctContext = React.createContext(contextValue);

    return (
        <ProudctContext.Provider value={contextValue}>
            <JDcontainer size={WindowSize.full}>
                <div className="productSetting">
                    <JDpageHeader title={"상품설정"} desc={"판매 중인 상품의 상세 내용을 변경할 수 있습니다"} />
                    <div className="productSetting__content">
                        <JDcard mb mode="border">
                            <DateChangeHeader
                                RightSide={
                                    <section>
                                        <JDselect
                                            autoSize
                                            {...storeSelectHook}
                                        />
                                    </section>
                                }
                                calModalHook={calModalHook}
                                dayPickerHook={dayPickerHook} />
                        </JDcard>

                        <DotButton mb="normal" onClick={() => {
                            productModalHook.openModal({
                                mode: "create",
                            })
                        }}>상품생성</DotButton>
                        {
                            items.map((product, index) => {
                                return <Product
                                    handleEdit={() => {
                                        productModalHook.openModal({
                                            mode: "update",
                                            product
                                        })
                                    }}
                                    {...product}
                                    key={index + "pi"}
                                />
                            })
                        }
                    </div>
                </div>
            </JDcontainer>
            <ProductModal storeId={selectedStore} onCreate={handleCreate} onDelete={handleDelete} onUpdate={handleUpdate} modalHook={productModalHook} />
            <JDdayPickerModal
                {...dayPickerHook}
                displayHeader={false}
                autoClose
                isRange={false}
                modalHook={calModalHook}
            />
        </ProudctContext.Provider>
    )
}

export default ProductSetting