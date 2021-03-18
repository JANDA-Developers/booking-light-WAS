import { Bold, JDhorizen, JDswitch } from '@janda-com/front';
import { ISet } from '@janda-com/front/dist/types/interface';
import React from 'react';
import { IbuypageConfig } from './BuypageConfiger';

interface IProp {
    config: IbuypageConfig
    setConfig: ISet<IbuypageConfig>
}

export const ReservationNormalConfiger: React.FC<IProp> = ({ config: _config, setConfig }) => {
    const { RESERVATION_NORMAL: config } = _config;
    const { useBasket, useImgSlide, useRangeFilter, useSearchFilter, useTimeFilter } = config;
    return <div><Bold size="small">필터</Bold>
        <JDhorizen margin={1} />
        <div>
            <JDswitch onChange={(v) => {
                config.useRangeFilter = v;
                setConfig({ ..._config })
            }} checked={useRangeFilter} mb label="시간필터 범위 출력" />
        </div>
        {/* <div>
<JDswitch onChange={(v) => {
    config.useTimeFilter = v;
    setConfig({ ...config })
}} checked={useTimeFilter} mb label="시간필터 출력" />
</div> */}
        <div>
            <JDswitch onChange={(v) => {
                config.useSearchFilter = v;
                setConfig({ ..._config })
            }} checked={useSearchFilter} mb label="검색필터 출력" />
        </div>
        <Bold size="small">기타</Bold>
        <JDhorizen margin={1} />
        <div>
            <JDswitch onChange={(v) => {
                config.useImgSlide = v;
                setConfig({ ..._config })
            }} checked={useImgSlide} mb label="이미지 슬라이딩" />
        </div>
        <div>
            <JDswitch onChange={(v) => {
                config.useBasket = v;
                setConfig({ ..._config })
            }} checked={useBasket} mb label="장바구니 사용" />
        </div>
    </div>
};
