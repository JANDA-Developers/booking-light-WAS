import {
    InputText,
    JDcard,
    JDcontainer,
    JDpageHeader,
    JDselect,
    JDselectCounter,
    JDswitch,
    useInput,
    useSelect,
    WindowSize,
} from "@janda-com/front";
import React, { useContext, useState } from "react";
import { useHistory, useRouteMatch } from "react-router";
import { CardBtn } from "../../../component/btns/ModalBtn";
import AppContext from "../../../context";
import { useDateTimepicker } from "../../../hook/useDateTimePicker";
import {
    useOptionCreate,
    useOptionDelete,
    useOptionFindById,
    useOptionUpdate,
} from "../../../hook/useOption";
import { Paths } from "../../../MainRouter";
import { Foption, OptionCreateInput } from "../../../type/api";
import { COUNT } from "../../../type/const";
import { omits } from "../../../utils/omits";
import { DetailOptionConfig } from "./DetailOptionConfig";

interface IProp {
    option?: Foption;
}

export const OptionDetail: React.FC<IProp> = ({ option }) => {
    const history = useHistory();
    const { itemOps, selectedStoreId } = useContext(AppContext);
    const dateTimePicker = useDateTimepicker();
    const [isOpen, setOpen] = useState(false);
    const toList = () => {
        history.push(Paths.optionList);
    };
    const [update] = useOptionUpdate({ onCompleteSucess: toList });
    const [create] = useOptionCreate({ onCompleteSucess: toList });
    const [remove] = useOptionDelete({ onCompleteSucess: toList });

    const labelHook = useInput(option?.label || "");
    const priceHook = useInput(option?.price || 0);
    const countHook = useSelect(option?.count || (1 as any), COUNT);
    const [dependentItem, setDependentItem] = useState<string[]>(
        option?.dependentItem || itemOps.map((itemOp) => itemOp.value)
    );
    const count = countHook.selectedOption?.value || -1;
    const nonLimitCountDefault = count === -1;
    const [nonLimit, setNonLimit] = useState(nonLimitCountDefault);

    const nextData: OptionCreateInput = {
        count: nonLimit ? count : -1,
        dependentItem,
        label: labelHook.value || "",
        price: priceHook.value || 0,
        tags: [],
        type: "NORMAL",
    };

    const handleCreate = () => {
        create({
            variables: {
                storeId: selectedStoreId,
                input: omits(nextData),
            },
        });
    };

    const handleUpdate = () => {
        update({
            variables: {
                optionId: option?._id,
                input: omits(nextData),
            },
        });
    };
    const handleDelete = () => {
        remove({
            variables: {
                optionId: option?._id,
            },
        });
    };

    return (
        <div>
            <JDpageHeader
                title="옵션상품"
                desc="옵션상품을 등록할떄, 선택한 조건사항들에 맞춰서 예약상황때 옵셔선택이 가능하게 됩니다."
            />
            <JDcontainer verticalPadding size={WindowSize.lg}>
                <JDcard
                    foot={
                        <div>
                            <CardBtn
                                mr
                                onClick={handleCreate}
                                thema="primary"
                                label="생성하기"
                            />
                            <CardBtn
                                onClick={handleUpdate}
                                mr
                                label="수정하기"
                            />
                            <CardBtn
                                onClick={handleDelete}
                                thema="error"
                                label="삭제하기"
                            />
                        </div>
                    }
                >
                    <InputText {...labelHook} mb label="옵션명" />
                    <InputText comma {...priceHook} mb label="가격" />
                    <JDswitch
                        mb
                        label="재고무한"
                        checked={nonLimit}
                        onChange={() => {
                            setNonLimit(!nonLimit);
                        }}
                    />
                    <div>
                        {!nonLimit && (
                            <JDselectCounter
                                selectHook={countHook}
                                mb
                                label="재고"
                            />
                        )}
                    </div>
                    <JDselect
                        mb
                        isMulti
                        options={itemOps}
                        onChanges={(ops) => {
                            const itemIds = ops?.map((op) => op.value) || [];
                            setDependentItem(itemIds);
                        }}
                        selectedOptions={itemOps.filter((itemOp) =>
                            dependentItem.includes(itemOp.value)
                        )}
                        label="종속 아이템"
                    />
                    {/* <DetailBtn
                        mb
                        open={isOpen}
                        onClick={() => {
                            setOpen(!isOpen);
                        }}
                    /> */}
                    {/* <DetailOptionConfig /> */}
                </JDcard>
            </JDcontainer>
        </div>
    );
};

type IDetailRouteProp = { optionId?: string };
export const OptionDetailWrap = () => {
    const {
        params: { optionId },
    } = useRouteMatch<IDetailRouteProp>();
    const { item: option } = useOptionFindById(optionId);

    return <OptionDetail option={option} key={option?._id} />;
};

export default OptionDetailWrap;
