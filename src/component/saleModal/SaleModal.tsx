import { IUseModal, JDalign, JDbutton, JDlabel, JDmodal, JDmodalConfigProps, JDtypho, toast } from '@janda-com/front';
import React from 'react';
import dayjs from "dayjs"
import { autoComma, copytoClipboard } from '@janda-com/front';
import { InputText } from '@janda-com/front';

export interface IProp extends JDmodalConfigProps {
    modalHook: IUseModal
}

export const SaleModal: React.FC<IProp> = ({ modalHook, ...prop }) => {
    return <JDmodal {...modalHook} foot={<JDalign>
        <JDbutton>예약취소</JDbutton>
    </JDalign>} {...prop}>

        <JDalign grid>
            <JDalign col={{
                full: 6,
                md: 12
            }}>
                <div>
                    <JDlabel txt="예약자명" />
                    <JDtypho mb="large">Booking@stayjanda.com</JDtypho>
                </div>
                <div>
                    <JDlabel txt="예약일" />
                    <JDtypho>
                        {dayjs().format("YY.MM.DD HH:mm")}
                    </JDtypho>
                </div>
                <div>
                    <JDlabel txt="결제금액" />
                    <JDtypho>
                        {autoComma(250000)}
                    </JDtypho>
                </div>
                <div>
                    <JDlabel txt="예약번호" />
                    <InputText iconOnClick={() => {
                        copytoClipboard("ASAXASS");
                        toast("클립보드에 복사 되었습니다.");
                    }} icon="copy" iconProps={
                        {
                            hover: true,
                            tooltip: "클립보드에 복사하기"
                        }
                    } />
                </div>

            </JDalign>
            <JDalign col={{
                full: 6,
                md: 12
            }}>
            </JDalign>
        </JDalign>
    </JDmodal>;
};

export default SaleModal;