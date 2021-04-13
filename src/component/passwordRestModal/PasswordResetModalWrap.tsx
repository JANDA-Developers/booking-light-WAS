import { useModal } from '@janda-com/front';
import React from 'react';
import { useBusiResetPassword } from '../../hook/useUser';
import { useVerification } from '../../hook/useVerification';
import { VerificationEvent, VerificationTarget } from '../../type/api';
import { completeMsg } from '../../utils/onCompletedMessage';
import VerificationModal, { IVerfiModalInfo } from '../verfi/VerificationModal';
import PasswordResetModal, { CompleteCallBackParam, IPasswordResetModalProp } from './PasswordResetModal';

interface IProp extends Omit<IPasswordResetModalProp, "onClickVerifyBtn" | "onClickCompleteBtn"> { }

export const PasswordResetModalWrap: React.FC<IProp> = ({ ...props }) => {
    const [passwordResetMu] = useBusiResetPassword({
        onCompleted: ({ BusinessUserResetPassword }) => {
            if (completeMsg(BusinessUserResetPassword, "패스워드가 재설정 되었습니다.")) {
                props.modalHook.closeModal();
            };
        }
    });
    const verifiModalHook = useModal<IVerfiModalInfo>()
    const verificationHook = useVerification(VerificationEvent.UserResetPassword, VerificationTarget.PHONE);

    const handlePasswordChange = async (param: CompleteCallBackParam) => {
        verificationHook.verifiComplete(param.key).then(result => {
            if (result?.ok) {
                passwordResetMu({
                    variables: {
                        newPassword: param.newPassword
                    }
                })
            }
        })
    }

    return <div>
        <PasswordResetModal
            requireField={{
                password: true
            }}
            {...props}
            onClickVerifyBtn={(param) => {
                verificationHook.verifiStart(param.phoneNumber)
            }} onClickCompleteBtn={handlePasswordChange} />
        <VerificationModal  {...verificationHook} target={VerificationTarget.PHONE} modalHook={verifiModalHook} />
    </div>

};
