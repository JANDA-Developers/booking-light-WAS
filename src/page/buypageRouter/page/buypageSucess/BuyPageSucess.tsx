import { Bold, JDcontainer } from '@janda-com/front';
import React from 'react';
import { useRouteMatch } from 'react-router';
import { BackStepBar } from '../../../../component/backstepBar/BackstepBar';
import { PurchaseBundleViewer } from '../../../../component/purchaseBunldeViewer/PurhcaseBundleViewer';
import { usePurchaseBundleFindById } from '../../../../hook/usePurchase';
import { BuyPagePaths } from '../../BuyPageRouter';

type IDetailRouteProp = { bundleId: string }

interface IProp { }

export const BuyPageSucess: React.FC<IProp> = () => {
    const routeMatch = useRouteMatch<IDetailRouteProp>();
    const { params: { bundleId } } = routeMatch;
    const { item } = usePurchaseBundleFindById(bundleId);

    if (!item) return null;
    return <JDcontainer verticalPadding className="buyPageSetDetail__container">
        <BackStepBar mb label={"예약페이지로"} go={BuyPagePaths.index} />
        <Bold size="h6">구매가 완료 되었습니다.</Bold>
        <PurchaseBundleViewer bundle={item} />
    </JDcontainer>
};
