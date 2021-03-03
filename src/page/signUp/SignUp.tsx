import { JDpolicyViewer, InputText, Flex, isEmail, isPassword, isPhone, JDbutton, JDcheckBox, JDcontainer, JDlabel, useCheckBox, useInput, useModal, Validater, onCompletedMessage, JDtypho, JDcard } from '@janda-com/front';
import React from 'react';
import { useHistory } from 'react-router-dom';
import { AuthPaths } from '../../AuthRouter';
import { CheckBtn } from '../../component/checkBtn/CheckBtn';
import { JDicon } from '../../component/icons/Icons';
import PasswordChecker from '../../component/passwordChecker/PasswordCheck';
import VerificationModal from '../../component/verfi/VerificationModal';
import { useDuplicateCheck, useSignUp } from '../../hook/useUser';
import { useVerification } from '../../hook/useVerification';
import { UserRole, VerificationEvent, VerificationTarget } from '../../type/api';
import { completeMsg } from '../../utils/utils';
import PrivacyPolicy from './Policy';

export interface IProps { }

const SignUpUI: React.FC<IProps> = ({
}) => {
    const history = useHistory();
    const isDev = process.env.NODE_ENV === 'development';
    const verificationHook = useVerification(VerificationEvent.UserVerifyPhone, VerificationTarget.PHONE)
    const phoneVerifiModal = useModal();
    const agreePolicyHook = useCheckBox(true);
    const emailHook = useInput(isDev ? 'colton950901@gmail.com' : '');
    const nameHook = useInput(isDev ? '개발' : '');
    const phoneNumberHook = useInput(isDev ? '01052374492' : '');
    const companyNameHook = useInput(isDev ? 'janda' : '');
    const passwordHook = useInput(isDev ? '#janda123' : '');
    const passwordCheckHook = useInput(isDev ? '#janda123' : '');
    const addressHook = useInput(isDev ? '#janda123' : '');

    const [signUp] = useSignUp({
        onCompleted: ({ SignUp }) => {
            if (completeMsg(SignUp, "회원가입 완료", "가입 실패")) {
                history.push(AuthPaths.login);
            }
        }
    })

    const { checkEmailDuplicate, duplicateChecked } = useDuplicateCheck()


    const { validate } = new Validater([
        {
            value: isPhone(phoneNumberHook.value),
            failMsg: '올바른 번호가 아닙니다.',
            id: "PasswordInput"
        }, {
            value: isEmail(emailHook.value),
            failMsg: '올바른 이메일이 아닙니다.',
            id: 'EmailInput'
        }, {
            value: addressHook.value,
            failMsg: '주소를 입력해주세요.',
            id: 'AddressInput'
        }, {
            value: duplicateChecked,
            failMsg: '이메일 중복체크를 해주세요.',
            id: 'EmailInput'
        }, {
            value: agreePolicyHook.checked,
            failMsg: '개인정보 동의 부탁드립니다.',
            id: "AgreePolicy",
        }, {
            value: passwordCheckHook.value === passwordHook.value,
            failMsg: '비밀번호가 일치하지 않습니다.',
            id: "AgreePolicy"
        }, {
            value: companyNameHook.value,
            failMsg: '회사명을 입력 해주세요.',
            id: "CompanayName"
        }, {
            value: passwordHook.isValid,
            failMsg: '올바른 비밀번호가 아닙니다.',
            id: "PasswordInput"
        }])



    const handleSignUp = () => {

        if (validate()) {
            signUp({
                variables: {
                    input: {
                        location: {
                            address: addressHook.value,
                        },
                        email: emailHook.value,
                        name: nameHook.value,
                        phoneNumber: phoneNumberHook.value,
                        company: companyNameHook.value,
                        password: passwordHook.value,
                    }
                }
            })
        }
    }

    const handleDuplicateCheck = () => {
        checkEmailDuplicate(emailHook.value, UserRole.BUSINESS_USER);
    }

    const handleVerifi = () => {
        if (validate([1]))
            phoneVerifiModal.openModal()
    }


    const verifiedPhone = verificationHook.verifiData?.isVerified;
    return (
        <div className={`signup`}>
            <JDcontainer verticalPadding>
                <JDcard>
                    <InputText mb id="NameInput" label={'성함'} {...nameHook} />
                    <Flex mb oneone vEnd >
                        <InputText
                            mr
                            autoComplete="off"
                            id="EmailInput"
                            label={'이메일'}
                            readOnly={duplicateChecked}
                            {...emailHook}
                        />
                        <CheckBtn onClick={handleDuplicateCheck} checked={!!duplicateChecked} >중복확인</CheckBtn>
                    </Flex>
                    <JDlabel txt={'핸드폰번호'} />
                    <Flex
                        mb
                        vCenter
                        grow
                        vEnd
                    >
                        <InputText
                            readOnly={!!verifiedPhone}
                            mr
                            id="PhoneNumberInput"
                            hyphen
                            {...phoneNumberHook}
                        />
                        <CheckBtn onClick={handleVerifi} checked={!!verifiedPhone} >인증하기</CheckBtn>
                    </Flex>
                    <InputText label="주소" mb id="AddressInput"  {...addressHook} />
                    <InputText
                        mb
                        type="password"
                        id="PasswordInput"
                        label={'비밀번호'}
                        validation={isPassword}
                        {...passwordHook}
                    />
                    <InputText
                        mb
                        type="password"
                        id="PasswordCheckInput"
                        label={'비밀번호 확인'}
                        {...passwordCheckHook}
                    />
                    <JDtypho size="small">
                        <PasswordChecker txt={passwordHook.value} />
                    </JDtypho>
                    <InputText mb id="CompanayName" label={'회사명'} {...companyNameHook} />
                    <JDpolicyViewer>{PrivacyPolicy}</JDpolicyViewer>
                    <JDcheckBox
                        mb="huge"
                        mr
                        id="AgreePolicy"
                        label={'개인정보제공동의'}
                        {...agreePolicyHook}
                    />
                    <VerificationModal target={VerificationTarget.PHONE} {...verificationHook} payload={phoneNumberHook.value} modalHook={phoneVerifiModal} />
                    <div>
                        <JDbutton
                            size="long"
                            mb="no"
                            thema="primary"
                            className=""
                            id="SingupSubmitBtn"
                            label={'회원가입 완료'}
                            onClick={handleSignUp}
                        />
                    </div>
                </JDcard>
            </JDcontainer>
        </div >
    );
};

export default SignUpUI;