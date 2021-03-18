import { getFromUrl } from "@janda-com/front";
import React, { Suspense } from "react";
import { Route, Switch } from 'react-router-dom';
import { Page404 } from "./page/exceptions/Page404";
import UsageGraph from "./page/usageGraph/UsageGraph";
const Dashboard = React.lazy(() => import('./page/dashboard/Dashboard'));
const StoreSet = React.lazy(() => import('./page/store/StoreList'));
const ItemList = React.lazy(() => import('./page/item/ItemList'));
const ItemDetail = React.lazy(() => import('./page/item/ItemDetail'));
const ProductList = React.lazy(() => import('./page/product/ProductList'));
const ProductDetail = React.lazy(() => import('./page/product/ProductDetail[depreacted]'));
const BuyPageSet = React.lazy(() => import('./page/buypageSet/BuyPageSetDetail'));
const PurchaseList = React.lazy(() => import('./page/purchase/PurchaseBundleList'));

export enum Paths {
  sms = '/sms',
  itemDetail = '/itemList/detail',
  itemList = '/itemList',
  price = '/price-set',
  buypageList = '/buypageList',
  buypageSet = '/buypage',
  saleList = '/sale-list',
  storeUserList = '/store-user-list',
  payToJanda = '/pay-to-janda',
  payFromJanda = '/pay-from-janda',
  purchaseList = '/purchaseList',
  productDetail = '/productList/productDetail',
  productBoard = '/product-board',
  productList = '/productList',
  productGroup = '/product-group',
  productCapacity = '/product-capacity',
  storeSet = '/store-set',
  graph = '/graph',
  main = '/',
}


const storeCode = getFromUrl("storeCode");

const MainRouter = () => {
  return <Suspense fallback={<div ></div>}>
    <Switch>
      <Route exact path={Paths.main} render={() => <Dashboard />} />
      <Route path={Paths.purchaseList} render={() => <PurchaseList />} />
      <Route path={Paths.graph} render={() => <UsageGraph />} />
      {/* <Route path={Paths.buypageList} render={() => <BuyPageList />} /> */}
      {storeCode || <Route path={Paths.buypageSet} render={() => <BuyPageSet />} />}
      <Route path={Paths.storeSet} render={() => <StoreSet />} />
      <Route exact path={Paths.itemDetail + "/:itemId?"} render={() => <ItemDetail />} />
      <Route path={Paths.itemList} render={() => <ItemList />} />
      <Route exact path={Paths.productList + "/:itemId?"} render={() => <ProductList />} />
      <Route path={Paths.productDetail + "/:itemId"} render={() => <ProductDetail />} />
      <Route path={Paths.productDetail + "/:itemId"} render={() => <ProductDetail />} />
      <Route render={() => <Page404 />} />
    </Switch>
  </Suspense>
}

export default MainRouter;
