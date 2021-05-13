import { Bold, JDhorizen, JDswitch } from "@janda-com/front";
import { ISet } from "@janda-com/front/dist/types/interface";
import React from "react";
import { SalesDaysRange } from "src/page/product/component/SalesDaysRange";
import { BuyPageType } from "../../../type/enum";
import { IbuypageConfig } from "../config/config";

interface IProp {
    config: IbuypageConfig;
    setConfig: ISet<IbuypageConfig>;
}

export const ShoppingConfiger: React.FC<IProp> = ({
    config: _config,
    setConfig,
}) => {
    const { SHOPPING_MALL: config, type, salesDates } = _config;
    const { useBasket, useSearchFilter } = config;

    if (type !== BuyPageType.SHOPPING_MALL) return null;

    return (
        <div>
            <Bold size="small">필터</Bold>
            <JDhorizen margin={1} />
            <div>
                <JDswitch
                    onChange={(v) => {
                        config.useSearchFilter = v;
                        setConfig({ ..._config });
                    }}
                    checked={useSearchFilter}
                    mb
                    label="검색필터 출력"
                />
            </div>
            <Bold size="small">기타</Bold>
            <JDhorizen margin={1} />
            <div>
                <JDswitch
                    onChange={(v) => {
                        config.useBasket = v;
                        setConfig({ ..._config });
                    }}
                    checked={useBasket}
                    mb
                    label="장바구니 사용"
                />
            </div>
            <div>
                <Bold size="small">예약 가능 기간</Bold>
                <JDhorizen margin={1} />
                <div>
                    <SalesDaysRange
                        from={salesDates.from}
                        to={salesDates.to}
                        onChange={(range) => {
                            _config.salesDates = range;
                            setConfig({ ..._config });
                        }}
                    />
                </div>
            </div>
        </div>
    );
};
