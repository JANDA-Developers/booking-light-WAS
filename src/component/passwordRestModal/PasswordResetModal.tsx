import React from 'react';
import { JDmodalConfigProps, IUseModal, JDmodal, JDbutton, InputText, Flex, useInput, isPhone, isEmail } from "@janda-com/front";
import { useState } from 'react';
import { toast } from 'react-toastify';
import SecurityLevelViewer, { TCheck } from '../passwordChecker/SecurityLevelViewer';

type CompleteCallBackParam = {
    email: string;
    key: string;
    newPassword: string;
    newPasswordRe: string;
    phoneNumber: string;
};

type ChangeStartCallBackParam = {
    email: string;
    phoneNumber: string;
};

type TPasswordReseterLangs = {
    not_a_valid_phoneNumber: string;
    not_a_valid_email: string;
    password_is_not_matched: string;
    please_rewrite_your_new_password: string;
    password_rewrite: string;
    email: string;
    phoneNumber: string;
    authenticate: string;
    certification_number: string;
    new_password: string;
    check_new_password: string;
    confirm: string;
};

const DEFAULT_LANGS = {
    email: '이메일',
    not_a_valid_email: '올바른 이메일이 아닙니다.',
    not_a_valid_phoneNumber: '올바른 번호가 아닙니다.',
    password_is_not_matched: '비밀번호가 일치하지 않습니다.',
    password_rewrite: '패스워드 재작성',
    phoneNumber: '핸드폰번호',
    please_rewrite_your_new_password: '새로운 비밀번호를 입력 해주세요.',
    confirm: '확인',
    authenticate: '인증하기',
    certification_number: '인증번호',
    new_password: '새 비밀번호',
    check_new_password: '새 비밀번호 확인',
};

export interface IProps extends JDmodalConfigProps {
    langs?: Partial<TPasswordReseterLangs>;
    requireField?: {
        password?: boolean;
        email?: boolean;
    };
    // 인증버튼 핸들임
    onClickVerifyBtn: (param: ChangeStartCallBackParam) => void;
    // 최종 수정 완료시 로직
    onClickCompleteBtn: (param: CompleteCallBackParam) => void;
    modalHook: IUseModal;
}

export const PasswordResetModal: React.FC<IProps> = ({
    langs = DEFAULT_LANGS,
    onClickVerifyBtn,
    onClickCompleteBtn,
    modalHook,
    requireField,
    ...props
}) => {
    langs = {
        ...DEFAULT_LANGS,
        ...langs,
    };
    const emailHook = useInput('');
    const phoneNumberHook = useInput('');
    const keyHook = useInput('');
    const newPasswordHook = useInput('');
    const newConfimPasswordHook = useInput('');
    const [passwordLevelViewer, setPasswordLevelViewer] = useState<TCheck>({
        enAndNumber: false,
        length: false,
        special: false,
        checkedCount: 0,
    });

    const verifyValidate = () => {
        if (!isPhone(phoneNumberHook.value)) {
            toast.warn(langs['not_a_valid_phoneNumber']);
            document.getElementById('veriEmialInput')?.focus();
            return false;
        }
        if (requireField?.email && !isEmail(emailHook.value)) {
            toast.warn(langs['not_a_valid_email']);
            document.getElementById('veriPhoneInput')?.focus();
            return false;
        }
        return true;
    };

    const validate = () => {
        if (
            requireField?.password &&
            newPasswordHook.value !== newConfimPasswordHook.value
        ) {
            toast.warn(langs['password_is_not_matched']);
            return false;
        }
        return true;
    };

    return (
        <JDmodal
            head={{
                title: langs['password_rewrite'],
            }}
            foot={
                <JDbutton
                    mode="flat"
                    onClick={() => {
                        if (validate()) {
                            onClickCompleteBtn({
                                email: emailHook.value,
                                key: keyHook.value,
                                newPassword: newPasswordHook.value,
                                newPasswordRe: newConfimPasswordHook.value,
                                phoneNumber: phoneNumberHook.value,
                            });
                        }
                    }}
                    thema="primary"
                    label={langs['confirm']}
                />
            }
            {...modalHook}
            {...props}
        >
            {requireField?.email && (
                <div>
                    <InputText
                        mb
                        id="veriEmialInput"
                        label={langs['email']}
                        {...emailHook}
                    />
                </div>
            )}
            <Flex>
                <InputText
                    mb
                    mr
                    id="veriPhoneInput"
                    hyphen
                    label={langs['phoneNumber']}
                    {...phoneNumberHook}
                />
                <JDbutton
                    style={{
                        alignSelf: 'flex-end',
                    }}
                    onClick={() => {
                        if (verifyValidate()) {
                            onClickVerifyBtn({
                                email: emailHook.value,
                                phoneNumber: phoneNumberHook.value,
                            });
                        }
                    }}
                    mode="border"
                    thema="primary"
                    mb
                    label={langs['authenticate']}
                />
            </Flex>
            <div>
                <InputText mb label={langs['certification_number']} {...keyHook} />
            </div>

            {requireField?.password && (
                <div>
                    <div>
                        <InputText
                            label={langs['new_password']}
                            type="password"
                            mb
                            {...newPasswordHook}
                        />
                    </div>
                    <SecurityLevelViewer
                        passwordCondition={passwordLevelViewer}
                        setPasswordCondition={setPasswordLevelViewer}
                        password={newPasswordHook.value}
                    />
                    <div className="JDsmall-text JDstandard-margin-bottom"></div>
                    <div>
                        <InputText
                            label={langs['check_new_password']}
                            type="password"
                            {...newConfimPasswordHook}
                        />
                    </div>
                </div>
            )}
        </JDmodal>
    );
};

export default PasswordResetModal;
