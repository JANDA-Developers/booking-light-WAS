import { Bold, Col, Grid, JDcard, JDcontainer, JDhorizen, JDpageHeader, JDselect, JDswitch, JDtypho, WindowSize } from '@janda-com/front';
import React, { useContext } from 'react';
import { JDicon } from '../../component/icons/Icons';
import AppContext from '../../context';
import { BuyPageRouterWrap as BuyPageRouter } from '../buypageRouter/BuyPageRouter';

interface IProp { }

export const BuyPageSetDetail: React.FC<IProp> = () => {
    const { selectedStore } = useContext(AppContext);

    return <div>
        <JDpageHeader title="예약페이지 생성하기" desc="원하는 형태의 예약페이지 생성하기" />
        <JDcontainer size={WindowSize.full}>
            <Grid>
                {/* 미리보기 */}
                <Col full={9} lg={12}>
                    <JDcard head="미리보기">
                        <BuyPageRouter storeCode={selectedStore?.code} />
                    </JDcard>
                </Col>
                <Col full={3} lg={12}>
                    <JDcard head="페이지 설정하기">
                        <Bold size="small">기본</Bold>
                        <JDhorizen margin={1} />
                        <JDselect mb label="페이지 타입" />
                        <Bold size="small">필터</Bold>
                        <JDhorizen margin={1} />
                        <div>
                            <JDswitch mb label="시간필터 출력" />
                        </div>
                        <div>
                            <JDswitch mb label="검색필터 출력" />
                        </div>
                        <div>
                            <JDselect mb label="분단위 조절" />
                        </div>
                        <Bold size="small">기타</Bold>
                        <JDhorizen margin={1} />
                        <div>
                            <JDswitch mb label="장바구니 표시" />
                        </div>
                        {/* <JDselect onChange={ } /> */}
                        {/* //기타 옵션들 들어갈 자리  */}
                    </JDcard>
                </Col>
            </Grid>
        </JDcontainer>
    </div>
};

export default BuyPageSetDetail;

// store 에 resvPag가 여러가지 들어감.
// 스키마가 나오지않아 어떻게 해야할지 모르겠음