import { Bold, JDhorizen, JDswitch } from "@janda-com/front";
import { ISet } from "@janda-com/front/dist/types/interface";
import React from "react";
import { BuyPageType } from "../../../type/enum";
import { SalesDaysRange } from "../../product/component/SalesDaysRange";
import { IbuypageConfig } from "../config/config";

interface IProp {
    config: IbuypageConfig;
    setConfig: ISet<IbuypageConfig>;
}

export const TimeConfiger: React.FC<IProp> = ({
    config: _config,
    setConfig,
}) => {
    const { SHOPPING_MALL: config, type, salesDates } = _config;
    const { useBasket, useSearchFilter } = config;

    if (type !== BuyPageType.TIME_MALL) return null;

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
        </div>
    );
};
