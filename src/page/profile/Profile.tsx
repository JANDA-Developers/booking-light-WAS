import { JDavatar, InputText, Flex, JDbutton, JDcard, JDcontainer, JDpageHeader, useInput, useModal } from '@janda-com/front';
import React, { useContext, useState } from 'react';
import { ThisMonthInvocie } from '../../component/invoice/ThisMonthInvoice';
import { MiniPlan } from '../../component/miniPlan/MiniPlan';
import { PasswordResetModalWrap } from '../../component/passwordRestModal/PasswordResetModalWrap';
import { IPromptInfo, PormptModal } from '../../component/promptModal/PromptModal';
import SingleUploader from '../../component/singleUploader/SingleUploader';
import VerificationModal, { IVerfiModalInfo } from '../../component/verfi/VerificationModal';
import AppContext from '../../context';
import { useSingleUpload } from '../../hook/useUpload';
import { useBusiProfileUpdate } from '../../hook/useUser';
import { useVerification } from '../../hook/useVerification';
import { ProfileUpdateForBusinessUserInput, VerificationEvent, VerificationTarget } from '../../type/api';
import { omits } from '../../utils/omits';
import { completeMsg } from '../../utils/onCompletedMessage';
import { Validater } from '../../utils/Validater';

interface IProp { }

//TODO 이메일 변경하기
//TODO 핸드폰 변경하기

export const Profile: React.FC<IProp> = () => {
    const { me } = useContext(AppContext);
    const [profileUpdate] = useBusiProfileUpdate({
        onCompleted: ({ ProfileUpdateForBusinessUser }) => {
            if (completeMsg(ProfileUpdateForBusinessUser, "프로필 업데이트", "입력값이 올바르지 않습니다.")) {
                passwordPropmtModalHook.closeModal();
            }
        }
    });
    const phoneVerificationHook = useVerification(VerificationEvent.UserVerifyPhone, VerificationTarget.PHONE);
    const emailVerificationHook = useVerification(VerificationEvent.UserVerifyEmail, VerificationTarget.EMAIL);
    const verifiModalHook = useModal<IVerfiModalInfo>();

    const [verifiTarget, setVerifiTarget] = useState<VerificationTarget>()
    const [phoneChange, setPhoneChange] = useState(false);
    const [emailChange, setEmailChange] = useState(false);
    const uploads = useSingleUpload(me?.profileImage || undefined)
    const passwordPropmtModalHook = useModal<IPromptInfo>();
    const nameHook = useInput<string>(me?.name || "");
    const emailHook = useInput<string>(me?.email || "");
    const locationHook = useInput<string>(me?.location?.address || "");
    const phoneNumberHook = useInput<string>(me?.phoneNumber || "");
    const companyHook = useInput<string>(me?.company || "");
    const introduceHook = useInput<string>(me?.introduce || "");
    const passwordResetModalHook = useModal();

    const { } = new Validater([{
        value: "",
    }])

    const changeProfile = (pw: string) => {

        const next: ProfileUpdateForBusinessUserInput = {
            profileImage: uploads.file,
            email: emailHook.value,
            introduce: introduceHook.value,
            phoneNumber: phoneNumberHook.value,
            company: companyHook.value,
            location: {
                address: locationHook.value,
                addressDetail: "",
                lat: 10,
                lng: 10
            },
            name: nameHook.value
        }

        if (!phoneChange) {
            next.phoneNumber = undefined;
        }
        if (!emailChange) {
            next.email = undefined;
        }

        profileUpdate({
            variables: {
                input: omits(next),
                pw
            }
        })
    }

    const handleChangeProfile = () => {
        passwordPropmtModalHook.openModal({
            title: "프로필 변경을 위해서 비밀번호를 입력 해주세요.",
            callBack: changeProfile,
            inputProps: {
                label: "패스워드",
                type: "password",
                textarea: false
            }
        })
    }


    const targetVerificationHook = verifiTarget === VerificationTarget.PHONE ? phoneVerificationHook : emailVerificationHook;

    return <div>
        <JDpageHeader title="프로필 설정" desc="잔다의 원활한 지원을 받기위해서, 프로필을 채워 주세요." />
        <JDcontainer verticalPadding>
            <JDcard mb foot={
                <div>
                    <JDbutton mr thema="primary" onClick={handleChangeProfile} label="변경하기" />
                    <JDbutton thema="black" onClick={passwordResetModalHook.openModal} label="비밀번호 변경" />
                </div>
            }>
                <JDavatar size="largest" img={uploads.file?.uri} mb />
                <SingleUploader mb label="프로필 사진" {...uploads} />
                <InputText mb {...nameHook} label="성함" />
                <Flex mb oneone>
                    <InputText hyphen mr disabled={!phoneChange}  {...phoneNumberHook} label="핸드폰번호" />
                    <JDbutton mode="border" br="square" hide={phoneChange} style={{ alignSelf: "flex-end" }} onClick={() => {
                        setPhoneChange(true);
                    }} label="변경하기" />
                    <JDbutton mode="border" br="square" hide={!phoneChange} style={{ alignSelf: "flex-end" }} onClick={() => {
                        setVerifiTarget(VerificationTarget.PHONE)
                        verifiModalHook.openModal({
                            payload: phoneNumberHook.value,
                            target: VerificationTarget.PHONE
                        })
                    }} label="인증하기" />
                </Flex>
                <Flex mb oneone>
                    <InputText mr disabled={!emailChange}  {...emailHook} label="이메일" />
                    <JDbutton mode="border" br="square" hide={emailChange} style={{ alignSelf: "flex-end" }} onClick={() => {
                        setEmailChange(true);
                    }} label="변경하기" />
                    <JDbutton mode="border" br="square" hide={!emailChange} style={{ alignSelf: "flex-end" }} onClick={() => {
                        setVerifiTarget(VerificationTarget.EMAIL)
                        verifiModalHook.openModal({
                            payload: emailHook.value,
                            target: VerificationTarget.EMAIL
                        })
                    }} label="인증하기" />
                </Flex>
                <InputText mb {...companyHook} label="회사명" />
                <InputText mb {...locationHook} label="업장주소" />
                <InputText {...introduceHook} textarea label="간단한 소개서" />
            </JDcard>
            <Flex>
                <JDcard mr>
                    <MiniPlan />
                </JDcard>
                <JDcard head={"이번달 청구금"}>
                    <ThisMonthInvocie />
                </JDcard>
            </Flex>
            <VerificationModal
                {...targetVerificationHook}
                modalHook={verifiModalHook}
            />
            <PasswordResetModalWrap modalHook={passwordResetModalHook} />
            <PormptModal modalHook={passwordPropmtModalHook} />
        </JDcontainer>
    </div>
};

export default Profile;