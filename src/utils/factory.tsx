import { JDtypho } from "@janda-com/front";
import React from "react";
import { Switch, useHistory } from "react-router";
import { Route } from "react-router-dom";
import { DateWithTimeRange } from "../atom/format/DateFormat";
import {
    DateAndTimeRangeView,
    DateRangeMallRangeView,
    IDateRangeViewFactoryProps,
    TimeMallUseRangeView,
} from "../component/dateRangeViewFacotry/DateRangeViewFactory";
import { useBuypageDetail } from "../hook/useBuypageDetail";
import { BuyPagePaths } from "../page/buypageRouter/BuyPageRouter";
import { BuyPageCheck } from "../page/buypageRouter/page/buypageCheck/BuyPageCheck";
import { BuyPageFail } from "../page/buypageRouter/page/buypageFail/BuyPageFail";
import { TItemListViewType } from "../page/item/components/ItemListViewFactory";
import {
    itemFindById_ItemFindById_ItemBooking_products_ProductBooking_dateRangeForUse,
    purchaseBundleListForBusinessUser_PurchaseBundleListForBusinessUser_items,
    purchaseBundleListForCustomer_PurchaseBundleListForCustomer_items,
    StoreType,
} from "../type/api";
import { BuyPageType } from "../type/enum";
import { hhmmRange, yyyymmdd } from "./dateFormat";
import {
    BuyPageTypeMatcher,
    purchaseBundleDayRangeDescribe,
    purchaseBundleProductsDescribe,
    purchaseBundleProductsShoppingDescribe,
    purchaseBundleProductsTimeDescribe,
} from "./enumConverter";

const BuyPageTime = React.lazy(
    () => import("../page/buypageRouter/page/buypageList/BuyPageTime")
);
const BuyPageRangeDay = React.lazy(
    () => import("../page/buypageRouter/page/buypageList/BuyPageRangeDay")
);
const BuyPage = React.lazy(
    () => import("../page/buypageRouter/page/buypageList/BuyPage")
);
const BuyPageShopping = React.lazy(
    () => import("../page/buypageRouter/page/buypageList/BuyPageShopping")
);

const BuyPagePurchase = React.lazy(
    () => import("../page/buypageRouter/page/buypagePurchase/BuyPagePurchase")
);
const BuyPageRangeDayPurchase = React.lazy(
    () =>
        import(
            "../page/buypageRouter/page/buypagePurchase/BuyPageRangeDayPurchase"
        )
);
const BuyPageShoppingPurchase = React.lazy(
    () =>
        import(
            "../page/buypageRouter/page/buypagePurchase/BuyPageShoppingPurchase"
        )
);
const BuyPageTimePurchase = React.lazy(
    () =>
        import("../page/buypageRouter/page/buypagePurchase/BuyPageTimePurchase")
);
const BuyPageTableSucess = React.lazy(
    () => import("../page/buypageRouter/page/buypageSucess/BuyPageTableSucess")
);

//@@ Abstract Factory Pattern @@
export abstract class StoreFactory {
    private type: StoreType;
    private buypageType: BuyPageType;

    public isDateRangeMall: boolean;
    public isShoppingType: boolean;
    public isTimeMall: boolean;

    abstract BuypageIndex: React.FC;
    BuypagePurchase: React.FC<any> = BuyPageShoppingPurchase;
    BuypageSucess: React.FC = BuyPageTableSucess;
    BuypageCheck: React.FC = BuyPageFail;
    BuypageFail: React.FC = BuyPageCheck;

    constructor(type: StoreType) {
        this.type = type;
        this.buypageType = BuyPageTypeMatcher[type];
        this.isDateRangeMall =
            BuyPageTypeMatcher[type] === BuyPageType.DAY_RANGE;
        this.isShoppingType =
            BuyPageTypeMatcher[type] === BuyPageType.SHOPPING_MALL;
        this.isTimeMall = BuyPageTypeMatcher[type] === BuyPageType.TIME_MALL;
    }

    get itemListDefaultView(): TItemListViewType {
        return "list";
    }

    abstract purchaseBundleDescribe(
        original: purchaseBundleListForBusinessUser_PurchaseBundleListForBusinessUser_items
    ): string;

    get dateRangeViewFactory(): React.FC<IDateRangeViewFactoryProps> {
        return DateAndTimeRangeView;
    }

    get BuypageRouter(): JSX.Element {
        const detailhook = useBuypageDetail({ defaultAttrs: [] });
        const history = useHistory();
        return (
            <Switch>
                <Route
                    exact
                    path={[BuyPagePaths.index]}
                    component={this.BuypageIndex}
                />
                <Route
                    path={BuyPagePaths.sucess + "/:bundleId?"}
                    render={() => <this.BuypageSucess />}
                />
                <Route
                    path={BuyPagePaths.fail}
                    render={() => <this.BuypageFail />}
                />
                <Route
                    path={BuyPagePaths.check}
                    render={() => <this.BuypageCheck />}
                />
                <Route
                    path={BuyPagePaths.purchase}
                    render={() => (
                        <this.BuypagePurchase
                            handleBackStep={() => {
                                history.goBack();
                            }}
                            buypageDetailHook={detailhook}
                        />
                    )}
                />
            </Switch>
        );
    }
}

class DayRangeStoreFactory extends StoreFactory implements StoreFactory {
    BuypageIndex = BuyPageRangeDay;
    BuypagePurchase = BuyPageRangeDayPurchase;

    public purchaseBundleDescribe(
        original: purchaseBundleListForBusinessUser_PurchaseBundleListForBusinessUser_items
    ): string {
        return purchaseBundleDayRangeDescribe(original as any);
    }

    get dateRangeViewFactory() {
        return DateRangeMallRangeView;
    }
}

class TimeRangeStoreFactory extends StoreFactory implements StoreFactory {
    BuypageIndex = BuyPageTime;
    BuypagePurchase = BuyPageTimePurchase;

    public purchaseBundleDescribe(
        original: purchaseBundleListForBusinessUser_PurchaseBundleListForBusinessUser_items
    ): string {
        return purchaseBundleProductsTimeDescribe(original as any);
    }
    get dateRangeViewFactory(): React.FC<IDateRangeViewFactoryProps> {
        return TimeMallUseRangeView;
    }
}

class ShoppingStoreFactory extends StoreFactory implements StoreFactory {
    BuypageIndex = BuyPageShopping;
    BuypagePurchase = BuyPageShoppingPurchase;

    public purchaseBundleDescribe(
        original: purchaseBundleListForBusinessUser_PurchaseBundleListForBusinessUser_items
    ): string {
        return purchaseBundleProductsShoppingDescribe(original as any);
    }
    get dateRangeViewFactory(): React.FC<IDateRangeViewFactoryProps> {
        return TimeMallUseRangeView;
    }
    get itemListDefaultView(): TItemListViewType {
        return "gallery";
    }
}

class STORE_FACTORY extends StoreFactory implements StoreFactory {
    BuypageIndex = BuyPage;
    BuypagePurchase: React.FC<any> = BuyPagePurchase;

    public purchaseBundleDescribe(
        original: purchaseBundleListForBusinessUser_PurchaseBundleListForBusinessUser_items
    ): string {
        return purchaseBundleProductsDescribe(original as any);
    }
}

export const StoreFactoryMap = new Map<BuyPageType, typeof STORE_FACTORY>();
StoreFactoryMap.set(BuyPageType.DAY_RANGE, DayRangeStoreFactory);
StoreFactoryMap.set(BuyPageType.TIME_MALL, TimeRangeStoreFactory);
StoreFactoryMap.set(BuyPageType.SHOPPING_MALL, ShoppingStoreFactory);
StoreFactoryMap.set(BuyPageType.RESERVATION_NORMAL, STORE_FACTORY);
