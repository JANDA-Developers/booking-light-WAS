import { Bold, Col, copytoClipboard, Flex, Grid, JDcard, JDcontainer, JDhorizen, JDlabel, JDpageHeader, JDselect, JDswitch, JDtypho, toast, WindowSize } from '@janda-com/front';
import { ISet } from '@janda-com/front/dist/types/interface';
import React, { useContext, useState } from 'react';
import { JDicon } from '../../component/icons/Icons';
import AppContext from '../../context';
import { useCopy } from '../../hook/useCopy';
import { BuyPageType } from '../../type/enum';
import { mergeDeepOnlyExsistProperty } from '../../utils/merge';
import { buyPageLinkCreater, BuyPagePaths, BuyPageRouterWrap as BuyPageRouter } from '../buypageRouter/BuyPageRouter';
import { DefaultBuypageConfig, BuypageConfiger, IbuypageConfig } from './compoents/BuypageConfiger';




interface IProp {
}

export const BuyPageSetDetail: React.FC<IProp> = () => {
    const { selectedStore } = useContext(AppContext);
    const [config, setConfig] = useCopy<IbuypageConfig>(
        mergeDeepOnlyExsistProperty(DefaultBuypageConfig, selectedStore?.buypage?.configure || {})
    )


    const getLink = () => buyPageLinkCreater({
        storeCode: selectedStore?.code
    })

    const handleView = () => {
        window.open(getLink(), "_blank");
    }

    const handleCopyLink = () => {
        copytoClipboard(getLink())
        toast("클립보드에 복사 되었습니다.")
    }

    return <div className="buy">
        <JDpageHeader title="예약페이지 생성하기" desc="원하는 형태의 예약페이지 생성하기" />
        <JDcontainer verticalPadding size={WindowSize.full}>
            <Grid>
                <Col full={9} lg={12}>
                    <Flex between vCenter><JDlabel>미리보기</JDlabel>
                        <Flex vCenter>
                            <JDicon mr mb hover onClick={handleCopyLink} icon="copy" />
                            <JDicon mb hover onClick={handleView} icon="newWindow" />
                        </Flex>
                    </Flex>
                    <BuyPageRouter propConfigure={config} storeCode={selectedStore?.code} />
                </Col>
                <Col full={3} lg={12}>
                    <JDlabel> 편집</JDlabel>
                    <BuypageConfiger setConfig={setConfig} config={config} />
                </Col>
            </Grid>
        </JDcontainer>
    </div>
};

export default BuyPageSetDetail;

// store 에 resvPag가 여러가지 들어감.
// 스키마가 나오지않아 어떻게 해야할지 모르겠음