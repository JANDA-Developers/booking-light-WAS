import { InputText, JDalign, JDbutton, JDcard, JDcheckBox, JDpreloader, Split, useCheckBox, useInput } from '@janda-com/front';
import React from 'react';
import TextButton from '../textButton/TextButton';

export interface ILoginUiProp {
    loading?: boolean;
    onSignUpClick?: () => void;
    onSignInClick?: (email: string, pw: string) => void;
    onFindEmailClick?: () => void;
    onFindPasswordClick?: () => void;
}

export const LoginForm: React.FC<ILoginUiProp> = ({
    loading,
    onSignInClick,
    onSignUpClick,
    onFindEmailClick,
    onFindPasswordClick,
}) => {
    const lastPw = localStorage.getItem('lastPw');
    const lastEmail = localStorage.getItem('lastLogin');
    const saveIdHook = useCheckBox(lastEmail ? true : false);
    const savePasswordHook = useCheckBox(lastPw ? true : false);
    const emailHook = useInput(lastEmail || '');
    const passwordHook = useInput(lastPw ? lastPw : '');

    const handleSignInBtn = () => {
        if (saveIdHook.checked) localStorage.setItem('lastLogin', emailHook.value);
        else localStorage.removeItem('lastLogin');
        if (savePasswordHook.checked)
            localStorage.setItem('lastPw', passwordHook.value);
        else localStorage.removeItem('lastPw');

        onSignInClick && onSignInClick(emailHook.value, passwordHook.value);
    };

    return (
        <JDcard>
            <div className="login">
                <JDpreloader floating loading={loading} />
                <div className="Login JDtext-align-center">
                    <div className="section">
                        <div className="section">
                            <div>
                                <InputText
                                    mb
                                    type="email"
                                    id="LoginEmail"
                                    Size="big"
                                    placeholder={'이메일 입력'}
                                    br="round"
                                    {...emailHook}
                                />
                            </div>
                            <div>
                                <InputText
                                    mb
                                    id="LoginPassword"
                                    type="password"
                                    placeholder={'비밀번호 입력'}
                                    Size="big"
                                    br="round"
                                    {...passwordHook}
                                />
                            </div>
                            <div className="login__config">
                                <JDalign
                                    flex={{
                                        wrap: true,
                                        vCenter: true,
                                    }}
                                >
                                    <JDcheckBox
                                        size="tiny"
                                        {...saveIdHook}
                                        label={'아이디저장'}
                                        mr
                                        id="rememberID"
                                    />
                                    <JDcheckBox
                                        size="tiny"
                                        {...savePasswordHook}
                                        label={'비밀번호저장'}
                                        id="rememberID"
                                    />
                                </JDalign>
                            </div>
                        </div>
                        <JDbutton
                            mb
                            id="LoginBtn"
                            thema="darkPrimary"
                            br="round"
                            size="longLarge"
                            mode="flat"
                            onClick={handleSignInBtn}
                            label={'로그인'}
                        />
                        <TextButton onClick={onSignUpClick}>
                            회원가입
                    </TextButton>
                        <Split />
                        <TextButton onClick={onFindPasswordClick}>
                            비밀번호 찾기
                    </TextButton>{' '}
                        <Split />
                        <TextButton onClick={onFindEmailClick}>
                            이메일 찾기
                    </TextButton>
                    </div>
                </div>
            </div>
        </JDcard>
    );
};

export default LoginForm;
