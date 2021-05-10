import { isEmpty, JDcard, JDcontainer, JDpageHeader, useModal } from '@janda-com/front';
import React, { useState } from 'react';
import { useHistory } from 'react-router';
import { useRouteMatch } from 'react-router-dom';
import { BackStepBar } from '../../component/backstepBar/BackstepBar';
import { CardBtn } from '../../component/btns/ModalBtn';
import { useProductAutomatorCreate, useProductAutomatorDelete, useProductAutomatorFindById, useProductAutomatorList, useProductAutomatorUpdate } from '../../hook/useProductAutomator';
import { Paths } from '../../MainRouter';
import { ProductAutomatorBookingCreateInput, productAutomatorBookingFindById_ProductAutomatorBookingFindById, ProductType } from '../../type/api';
import { omits } from '../../utils/omits';
import { completeMsg } from '../../utils/onCompletedMessage';
import { promptConfirm } from '../../utils/prompt';
import { Validater } from '../../utils/Validater';
import { IProductModalInfo } from '../product/component/ProductCreateModal';
import { AutoCreateForm } from './component/AutoCreateForm';


type IDetailRouteProp = { itemId: string }
interface IProp {
    item?: productAutomatorBookingFindById_ProductAutomatorBookingFindById;
}

// 여기는 이제 캐파시티에 대한 선택내용이 있음.
// 그리고 그내용을 purchase까지 전달할 예정임.
// 전달방법은 장바구니에 담아두는 방식임.
// 장바구니에 저장된후 계속하기 또는 구매하기로 진행가능함.
export const ProductDetail: React.FC<IProp> = ({ item }) => {
    const isCreate = !item;
    const history = useHistory();
    const productCreateModal = useModal<IProductModalInfo>()
    const [create] = useProductAutomatorCreate({
        onCompleted: ({ ProductAutomatorBookingCreate }) => {
            if (completeMsg(ProductAutomatorBookingCreate, "자동 설정 완료")) {
                history.push(Paths.productAutomator);
            }
        }
    });
    const [update] = useProductAutomatorUpdate({
        onCompleted: ({ ProductAutomatorBookingUpdate }) => {
            if (completeMsg(ProductAutomatorBookingUpdate, "자동 설정 변경")) {
                history.push(Paths.productAutomator);
            }
        }
    });
    const [remove] = useProductAutomatorDelete({
        onCompleted: ({ ProductAutomatorBookingDelete }) => {
            if (completeMsg(ProductAutomatorBookingDelete, "자동 설정 삭제")) {
                history.push(Paths.productAutomator);
            }
        }
    });
    const [data, setData] = useState<ProductAutomatorBookingCreateInput>({
        dateCount: item?.countDate || 0,
        name: item?.name || "",
        targetItemId: item?.targetItemId || "",
        templates: item?.templates.map(t => ({ ...t, attrs: [] })) || [],
        type: item?.type || ProductType.BOOKING,
        description: item?.description,
        exceptedDayOfWeeks: item?.exceptedDayOfWeeks,
        isDisabled: !!item?.isDisabled
    })


    const { validate } = new Validater([{
        value: !isEmpty(data.templates),
        failMsg: "생성 항목이 없습니다. 생성제출 해주세요.",
        id: "autoTemplate"
    }, {
        value: data.name,
        failMsg: "자동생성 이름을 입력 해주세요",
        id: "autoName",
    }, {
        value: data.targetItemId,
        failMsg: "자동생성 아이템을 선택 해주세요",
        id: "autoItem",
    }, {
        value: data.dateCount,
        failMsg: "앞으로 몇일까지 입력할 예정인지 선택 해주세요",
        id: "autoTill",
    }])

    const handleCreate = () => {
        if (validate()) {
            create({
                variables: {
                    input: {
                        ...omits(data)
                    },
                    withGenerate: true
                }
            })
        }
    }

    const handleUpdate = () => {
        if (validate())
            update({
                variables: {
                    id: item?._id,
                    input: {
                        ...omits(data, ["targetItemId", "type"])
                    },
                }
            })
    }


    const handleRemove = () => {
        if (!item) return;
        promptConfirm(item.name, `아이템을 삭제하실려면 ${item.name}을 정확하게 입력 해주세요.`, () => {
            remove({
                variables: {
                    id: item._id,
                    withDestroyProperties: true
                }
            })
        })
    }

    return <div>
        <JDpageHeader title="자동 판매설정" desc="시간단위로 판매할 경우 자동적으로 판매설정을 걸어 둘 수 있습니다." />
        <JDcontainer verticalPadding>
            <BackStepBar mb />
            <JDcard foot={
                <div>
                    <CardBtn hide={!isCreate} onClick={handleCreate} thema="primary" mr label="생성하기" />
                    <CardBtn hide={isCreate} onClick={handleUpdate} thema="primary" mr label="수정하기" />
                    <CardBtn hide={isCreate} onClick={handleRemove} thema="error" label="삭제하기" />
                </div>
            }>
                <AutoCreateForm data={data} setData={setData} />
            </JDcard>
        </JDcontainer>
    </div>
};

export const ProductDetailWrap: React.FC<IProp> = () => {
    const { params: { itemId } } = useRouteMatch<IDetailRouteProp>();
    const { item } = useProductAutomatorFindById(itemId);
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
