import React, { useState } from "react";
import {
    InputText,
    isEmail,
    isPassword,
    isPhone,
    JDbutton,
    JDcard,
    useInput,
    Validater,
} from "@janda-com/front";
import { Fuser, UserUpdateInput } from "../../type/api";
import { IJDcardProps } from "@janda-com/front/dist/components/cards/Card";
import { CardBtn } from "../../component/btns/ModalBtn";

interface IProp extends Omit<IJDcardProps, "onSubmit"> {
    onSubmit: (input: UserUpdateInput) => void;
    user?: Fuser;
}

export const SuperUserDataForm: React.FC<IProp> = ({
    user,
    onSubmit,
    ...props
}) => {
    const nameHook = useInput(user?.name || "");
    const emailHook = useInput(user?.email || "");
    const phoneNumberHook = useInput(user?.phoneNumber || "");
    const passwordHook = useInput("");
    const passwordConfirmHooks = useInput("");
    const memoHook = useInput(user?.adminMemo || "");
    const companyHook = useInput(user?.company || "");

    const { validate } = new Validater([
        {
            value: isPhone(phoneNumberHook.value),
            failMsg: "올바른 번호가 아닙니다.",
            id: "PasswordInput",
        },
        {
            value: isEmail(emailHook.value),
            failMsg: "올바른 이메일이 아닙니다.",
            id: "EmailInput",
        },
        {
            value: !passwordHook.value || passwordHook.isValid,
            failMsg: "올바른 비밀번호가 아닙니다.",
            id: "PasswordInput",
        },
        {
            value:
                !passwordHook.value ||
                passwordHook.value === passwordHook.value,
            failMsg: "비밀번호가 일치하지 않습니다.",
            id: "AgreePolicy",
        },
        {
            value: companyHook.value,
            failMsg: "회사명을 입력 해주세요.",
            id: "CompanayName",
        },
    ]);

    const handleSubmit = () => {
        if (validate())
            onSubmit({
                _password: passwordHook.value,
                adminMemo: memoHook.value,
                company: companyHook.value,
                email: emailHook.value,
                name: nameHook.value,
                phoneNumber: phoneNumberHook.value,
            });
    };

    return (
        <JDcard
            mode="border"
            {...props}
            foot={<CardBtn onClick={handleSubmit}>변경하기</CardBtn>}
        >
            <InputText mb label="회사명" {...companyHook} />
            <InputText mb label="이름" {...nameHook} />
            <InputText mb label="이메일" {...emailHook} />
            <InputText
                mb
                label="패스워드"
                validation={isPassword}
                {...passwordHook}
            />
            <InputText mb label="패스워드확인" {...passwordConfirmHooks} />
            <InputText mb label="슈퍼 관리자 메모" {...memoHook} textarea />
        </JDcard>
    );
};
