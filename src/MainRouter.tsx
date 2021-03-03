import React, { Suspense } from "react";
import { Route, Switch } from 'react-router-dom';
import { Page404 } from "./page/exceptions/Page404";
const Dashboard = React.lazy(() => import('./page/dashboard/Dashboard'));
const StoreSet = React.lazy(() => import('./page/store/StoreList'));
const ItemList = React.lazy(() => import('./page/item/ItemList'));
const ItemDetail = React.lazy(() => import('./page/item/ItemDetail'));
const ProductList = React.lazy(() => import('./page/product/ProductList'));
const ProductDetail = React.lazy(() => import('./page/product/ProductDetail'));
const BuyPageSet = React.lazy(() => import('./page/buypageSet/BuyPageSetDetail'));
const BuyPageList = React.lazy(() => import('./page/buypageSet/BuyPageList'));

export enum Paths {
  sms = '/sms',
  itemDetail = '/itemList/detail',
  itemList = '/itemList',
  price = '/price-set',
  buypageList = '/buypageList',
  buypageSet = '/buypageSet',
  saleList = '/sale-list',
  storeUserList = '/store-user-list',
  payToJanda = '/pay-to-janda',
  payFromJanda = '/pay-from-janda',
  productDetail = '/productList/productDetail',
  productBoard = '/product-board',
  productList = '/productList',
  productGroup = '/product-group',
  productCapacity = '/product-capacity',
  storeSet = '/store-set',
  main = '/',
}


const MainRouter = () => {
  return <Suspense fallback={<div ></div>}>
    <Switch>
      <Route path={Paths.buypageList} render={() => <BuyPageList />} />
      <Route path={Paths.buypageSet} render={() => <BuyPageSet />} />
      <Route path={Paths.storeSet} render={() => <StoreSet />} />
      <Route exact path={Paths.itemDetail + "/:itemId?"} render={() => <ItemDetail />} />
      <Route path={Paths.itemList} render={() => <ItemList />} />
      <Route exact path={Paths.productList + "/:itemId?"} render={() => <ProductList />} />
      <Route path={Paths.productDetail + "/:productId?/:itemId?"} render={() => <ProductDetail />} />
      <Route exact path={Paths.main} render={() => <Dashboard />} />
      <Route render={() => <Page404 />} />
    </Switch>
  </Suspense>
}

export default MainRouter;
