import { InputText, IUseModal, JDalign, JDbutton, JDmodal, JDselect, JDsingleUploader, JDtypho, useFilesManager, useInput, useModal, useSelect } from '@janda-com/front';
import { TlocalFile } from '@janda-com/front/dist/hooks/hook';

import React, { useState } from 'react';
import { BANK_SELECT_OP } from '../../../type/const';

type TSubmitInfo = {
    accountHolder: string;
    account: string;
    location: string;
    busiName: string;
    ceo: string;
    busiNum: string;
    subject: string;
}

type TSubmitFileInfo = {
    accountCopy: TlocalFile | string;
    busiCopy: TlocalFile | string;
}

interface IProp {
    modalHook: IUseModal;
    onSubmit: (info: TSubmitInfo, fileInfo: TSubmitFileInfo) => void
}

export const AccountRegistModal: React.FC<IProp> = ({ modalHook, onSubmit }) => {
    const [info, setInfo] = useState<TSubmitInfo>({
        account: "",
        accountHolder: "",
        busiName: "",
        busiNum: "",
        ceo: "",
        location: "",
        subject: ""
    })

    const bankHook = useSelect(BANK_SELECT_OP[0], BANK_SELECT_OP);
    const account_copyHook = useFilesManager();
    const busi_copyHook = useFilesManager();

    function set<T extends keyof TSubmitInfo>(key: T, value: TSubmitInfo[T]) {
        setInfo({ ...info, [key]: value });
    }

    return <JDmodal foot={
        <JDalign flex={{
            between: true
        }}>
            <JDbutton onClick={() => {
                const accountCopy = account_copyHook.localFiles[0] || account_copyHook.urls[0];
                const busiCopy = busi_copyHook.localFiles[0] || busi_copyHook.urls[0];
                const submitFile: TSubmitFileInfo = {
                    accountCopy,
                    busiCopy
                }

                onSubmit(info, submitFile)
            }} thema="grey4" padding="huge">계좌번호 등록</JDbutton>
            <JDbutton onClick={modalHook.closeModal} mode="border" padding="huge">등록 취소</JDbutton>
        </JDalign>
    } head={{
        title: "계좌번호 등록하기"
    }} {...modalHook}>

        <JDtypho size="h6" decoration="bar">계좌번호 입력</JDtypho>
        <JDalign flex={{
            vCenter: true
        }}>
            <div>
                <InputText value={info.accountHolder} onChange={(v: any) => {
                    set("accountHolder", v)
                }} label="예금주" />
            </div>
            <div>
                <JDselect label="은행" {...bankHook} />
            </div>
        </JDalign>
        <JDalign>
            <InputText value={info.account} onChange={(v: any) => {
                set("account", v)
            }} label="계좌번호('-'없이 숫자만 입력 해주세요)" />
        </JDalign>

        <JDsingleUploader labelProp={{
            txt: "통장사본"
        }} fileUploaderHook={account_copyHook} buttonProps={{
            label: "파일 선택",
            thema: "grey1",
            mode: 'flat',
            br: "square"
        }} />

        <JDtypho size="h6" decoration="bar">세금 계산서 정보 입력</JDtypho>
        <JDalign grid>
            <JDalign col={{
                full: 6,
                md: 12
            }}>
                <div>
                    <InputText value={info.busiName} onChange={(v: any) => {
                        set("busiName", v)
                    }} label="사업자명" />
                </div>
                <div>
                    <InputText value={info.ceo} onChange={(v: any) => {
                        set("ceo", v)
                    }} label="대표자명" />
                </div>
            </JDalign>
            <JDalign col={{
                full: 6,
                md: 12
            }}>
                <div>
                    <InputText value={info.busiNum} onChange={(v: any) => {
                        set("busiNum", v)
                    }} label="사업자등록번호 (-를 뺸숫자만 입력)" />
                </div>
                <div>
                    <InputText value={info.subject} onChange={(v: any) => {
                        set("subject", v)
                    }} label="업대/종목" />
                </div>
            </JDalign>
            <InputText value={info.location} onChange={(v: any) => {
                set("location", v)
            }} label="사업장 주소" />

        </JDalign>
        <JDsingleUploader fileUploaderHook={busi_copyHook} labelProp={{
            txt: "사업자등록증 사본"
        }} />
    </JDmodal>;
};


export default AccountRegistModal;