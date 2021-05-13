import {
    Col,
    copytoClipboard,
    Flex,
    Grid,
    JDcard,
    JDcontainer,
    JDhorizen,
    JDlabel,
    JDpageHeader,
    JDselect,
    JDswitch,
    JDtypho,
    toast,
    WindowSize,
} from "@janda-com/front";
import React, { useContext } from "react";
import { IconButton } from "../../atom/iconButton/IconButton";
import { Tip } from "../../atom/tip/Tip";
import AppContext from "../../context";
import { useCopy } from "../../hook/useCopy";
import { mergeDeepOnlyExsistProperty } from "../../utils/merge";
import {
    buyPageLinkCreater,
    BuyPagePaths,
    BuyPageRouterWrap as BuyPageRouter,
} from "../buypageRouter/BuyPageRouter";
import { BuypageConfiger } from "./compoents/BuypageConfiger";
import { IbuypageConfig } from "./config/config";
import { DefaultBuypageConfig } from "./config/configDefault";

interface IProp {}

export const BuyPageSetDetail: React.FC<IProp> = () => {
    const { selectedStore, type, isNonProfit } = useContext(AppContext);

    DefaultBuypageConfig.typeBuild(type!);
    DefaultBuypageConfig.nonProfitBuild(isNonProfit);
    const [config, setConfig] = useCopy<IbuypageConfig>(
        mergeDeepOnlyExsistProperty(
            DefaultBuypageConfig,
            selectedStore?.buypage?.configure || {}
        )
    );

    const getLink = () =>
        buyPageLinkCreater({
            storeCode: selectedStore?.code,
        });

    const handleView = () => {
        window.open(getLink(), "_blank");
    };

    const handleCopyLink = () => {
        copytoClipboard(getLink());
        toast("클립보드에 복사 되었습니다.");
    };

    const hasConfigure = !!selectedStore?.buypage.configure;

    return (
        <div className="buy">
            <JDpageHeader
                title="예약페이지 생성하기"
                desc="원하는 형태의 예약페이지 생성하기"
            />
            <JDcontainer verticalPadding size={WindowSize.full}>
                <Grid>
                    <Col full={9} lg={12}>
                        <Flex between vCenter>
                            <Flex vCenter>
                                <Tip
                                    message={
                                        hasConfigure
                                            ? "예약페이지 새창열기"
                                            : "구매페이지 설정을 저장 해주세요"
                                    }
                                >
                                    <IconButton
                                        mr="small"
                                        disabled={!hasConfigure}
                                        mb
                                        hover
                                        onClick={handleView}
                                        icon="magnifier"
                                    />
                                </Tip>
                                <Tip message="예약페이지 링크 복사하기">
                                    <IconButton
                                        mb
                                        onClick={handleCopyLink}
                                        icon="copy"
                                    />
                                </Tip>
                            </Flex>
                        </Flex>
                        <BuyPageRouter
                            propConfigure={config}
                            storeCode={selectedStore?.code}
                        />
                    </Col>
                    <Col full={3} lg={12}>
                        <JDlabel txt={"편집"} />
                        <BuypageConfiger
                            setConfig={setConfig}
                            config={config}
                        />
                    </Col>
                </Grid>
            </JDcontainer>
        </div>
    );
};

export default BuyPageSetDetail;

// store 에 resvPag가 여러가지 들어감.
// 스키마가 나오지않아 어떻게 해야할지 모르겠음
