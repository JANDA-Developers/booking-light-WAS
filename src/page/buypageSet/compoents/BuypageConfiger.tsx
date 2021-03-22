import { Bold, InputText, JDbutton, JDcard, JDhorizen, JDselect, JDswitch, JDtabs, opFind, Tab, TabList, TabPanel } from '@janda-com/front';
import { ISet } from '@janda-com/front/dist/types/interface';
import React, { useContext } from 'react';
import { ObjectInputRender } from '../../../component/objectInput/ObjectInputRender';
import AppContext from '../../../context';
import { useStoreUpdate } from '../../../hook/useStore';
import { Paymethod } from '../../../type/api';
import { BUYPAGE_TYPE_OPS, PAY_METHOD_OPS } from '../../../type/const';
import { BuyPageType } from '../../../type/enum';
import { completeMsg } from '../../../utils/onCompletedMessage';
import { ReservationNormalConfiger } from './ReservationNomalConfiger';

const buypageTexts = {
    countUnit: {
        kr: "개",
        description: "구매단위 라벨"
    },
    purchase: {
        kr: "구매하기",
        description: "구매버튼 라벨"
    },
    addtionalInput: {
        kr: "추가사항",
        description: "커스텀인풋 라벨"
    },
    productSelectLabel: {
        kr: "선택",
        description: "상품선택 라벨"
    }
}
export type TBuypageNormalTexts = typeof buypageTexts;

interface RESERVATION_NORMAL_PAGE_CONFIG {
    useSearchFilter: boolean
    useTimeFilter: boolean
    useRangeFilter: boolean
    useImgSlide: boolean
    useBasket: boolean
    texts: TBuypageNormalTexts
}

export interface IbuypageConfig {
    type: BuyPageType
    payMethods: Paymethod[],
    RESERVATION_NORMAL: RESERVATION_NORMAL_PAGE_CONFIG
}

export const DefaultBuypageConfig: IbuypageConfig = {
    type: BuyPageType.RESERVATION_NORMAL,
    payMethods: [],
    RESERVATION_NORMAL: {
        useBasket: false,
        useImgSlide: false,
        useRangeFilter: false,
        useSearchFilter: false,
        useTimeFilter: false,
        texts: buypageTexts
    }
}


interface IProp {
    config: IbuypageConfig
    setConfig: ISet<IbuypageConfig>
}

export const BuypageConfiger: React.FC<IProp> = ({ config, setConfig }) => {
    const { selectedStoreId } = useContext(AppContext);
    const { type, payMethods, RESERVATION_NORMAL: { texts, useBasket, useSearchFilter, useTimeFilter, useRangeFilter, useImgSlide } } = config;

    console.log({ texts });
    const [storeUpdate] = useStoreUpdate({
        onCompleted: ({ StoreUpdate }) => {
            completeMsg(StoreUpdate, "변경 저장완료")
        }
    })

    const seletedPayMethods = PAY_METHOD_OPS.filter(op => payMethods?.includes(op.value));

    const handleSaveConfig = () => {
        storeUpdate({
            variables: {
                storeId: selectedStoreId,
                input: {
                    buypage: {
                        configure: config
                    }
                }
            }
        })
    }


    return <JDcard foot={
        <JDbutton onClick={handleSaveConfig} thema="primary">저장하기</JDbutton>
    } head="페이지 설정하기">
        <JDtabs>
            <TabList >
                <Tab>일반설정</Tab>
                <Tab>텍스트설정</Tab>
            </TabList>
            <TabPanel>
                <Bold size="small">기본</Bold>
                <JDhorizen margin={1} />
                <JDselect
                    options={BUYPAGE_TYPE_OPS}
                    selectedOption={opFind(config.type, BUYPAGE_TYPE_OPS)}
                    onChange={(op) => {
                        const val = op.value
                        config.type = val;
                        setConfig({ ...config })
                    }} mb label="페이지 타입" />
                <JDselect mb onChanges={(ops) => {
                    config.payMethods = (ops || BUYPAGE_TYPE_OPS).map(op => op.value);
                    setConfig({ ...config })
                }} selectedOptions={seletedPayMethods} isMulti label="지원 결제수단" options={PAY_METHOD_OPS} >
                </JDselect>
                <ReservationNormalConfiger setConfig={setConfig} config={config} />
            </TabPanel>
            <TabPanel>
                <ObjectInputRender onChange={(object) => {
                    config.RESERVATION_NORMAL.texts = object
                    setConfig({
                        ...config
                    })
                }} value={texts || buypageTexts} />
            </TabPanel>
        </JDtabs>
        {/* <JDselect onChange={ } /> */}
        {/* //기타 옵션들 들어갈 자리  */}
    </JDcard>;
};
