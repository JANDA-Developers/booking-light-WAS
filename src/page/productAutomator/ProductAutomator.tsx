import { JDcontainer, JDpageHeader, WindowSize } from '@janda-com/front';
import React from 'react';
import { useHistory } from 'react-router';
import { CardBtn } from '../../component/btns/ModalBtn';
import DotButton from '../../component/dotButton/DotButton';
import { useProductAutomatorDelete, useProductAutomatorList, useProductAutomatorUpdate } from '../../hook/useProductAutomator';
import { Paths } from '../../MainRouter';
import { productAutomatorBookingList_ProductAutomatorBookingList_items } from '../../type/api';
import { completeMsg } from '../../utils/onCompletedMessage';
import { promptConfirm } from '../../utils/prompt';
import { AutoCreateCard } from './component/AutoCreateCard';

interface IProp { }

export const ProductAutomator: React.FC<IProp> = () => {
    const { items } = useProductAutomatorList();
    const history = useHistory();
    const [update] = useProductAutomatorUpdate({
        onCompleted: ({ ProductAutomatorBookingUpdate }) => {
            if (completeMsg(ProductAutomatorBookingUpdate, "활성화 변경")) {
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


    const toDetail = (id?: string) => {
        history.push(Paths.autoMatorDetail + "/" + id);
    }

    const handleCreate = () => {
        toDetail("")
    }

    const handleDetail = (item: productAutomatorBookingList_ProductAutomatorBookingList_items) => () => {
        toDetail(item._id);
    }

    const toggleDisable = (item: productAutomatorBookingList_ProductAutomatorBookingList_items) => () => {
        update({
            variables: {
                id: item?._id,
                input: {
                    name: item.name,
                    isDisabled: !item.isDisabled
                },
            }
        })
    }


    const handleRemove = (item: productAutomatorBookingList_ProductAutomatorBookingList_items) => () => {
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
        <JDpageHeader title="자동 판매 설정" desc="자동판매 설정을 통해서, 원하는 시간대에 상품 판매 설정을 자동화 할 수 있습니다." />
        <JDcontainer verticalPadding size={WindowSize.lg}>
            {items.map(item =>
                <AutoCreateCard onToggleDisable={toggleDisable(item)} mb foot={
                    <div>
                        <CardBtn mr onClick={handleDetail(item)} label="수정하기" />
                        <CardBtn thema="error" onClick={handleRemove(item)} label="삭제하기" />
                    </div>
                } key={item._id} autoCreater={item} />
            )}
            <DotButton onClick={handleCreate} >생성하기</DotButton>
        </JDcontainer>
    </div>;
};

export default ProductAutomator;
