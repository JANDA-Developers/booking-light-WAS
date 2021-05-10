import { JDcontainer, JDpageHeader, WindowSize } from "@janda-com/front";
import React from "react";
import { useHistory } from "react-router";
import { CardBtn } from "../../component/btns/ModalBtn";
import DotButton from "../../component/dotButton/DotButton";
import { useOptionDelete, useOptionList } from "../../hook/useOption";
import { Paths } from "../../MainRouter";
import { OptionCard } from "./components/OptionCard";

interface IProp {}

export const Option: React.FC<IProp> = () => {
    const history = useHistory();
    const { items: options } = useOptionList();
    const [remove] = useOptionDelete();

    return (
        <div>
            <JDpageHeader
                title="옵션상품 등록하기"
                desc="옵션상품을 등록할떄, 선택한 조건사항들에 맞춰서 예약상황때 옵셔선택이 가능하게 됩니다."
            />
            <JDcontainer verticalPadding size={WindowSize.lg}>
                <div>
                    {options.map((option) => (
                        <OptionCard
                            mb
                            key={option._id + "OptionCard"}
                            foot={
                                <div>
                                    <CardBtn
                                        mr
                                        onClick={() => {
                                            remove({
                                                variables: {
                                                    optionId: option._id,
                                                },
                                            });
                                        }}
                                        label={"삭제하기"}
                                    />
                                    <CardBtn
                                        onClick={() => {
                                            history.push(
                                                Paths.optionDetail +
                                                    "/" +
                                                    option._id
                                            );
                                        }}
                                        label={"수정하기"}
                                    />
                                </div>
                            }
                            option={option}
                        />
                    ))}
                    <DotButton
                        onClick={() => {
                            history.push(Paths.optionDetail);
                        }}
                    >
                        생성하기
                    </DotButton>
                </div>
            </JDcontainer>
        </div>
    );
};

export default Option;
