import { getFromUrl } from "@janda-com/front";
import React, { Suspense, useEffect } from "react";
import { Route, Switch } from 'react-router-dom';
import { Page404 } from "./page/exceptions/Page404";
import { openChannelTok } from "./lib/channelTok";
import { BuypageFieldSet } from "./page/buypageFieldSet/BuypageFieldSet";

const ItemCategory = React.lazy(() => import('./page/itemCategory/ItemCategry'));
const MemberShip = React.lazy(() => import('./page/memberShip/MemberShip'));
const SettlementHistory = React.lazy(() => import('./page/settlementHistory/SettlementHistory'));
const PayRegist = React.lazy(() => import('./page/payRegist/PayRegist'));
const SettlementDashboard = React.lazy(() => import('./page/settlement/SettlementDashboard'));
const Calendar = React.lazy(() => import('./page/Calendar/Calendar'));
const NotiHistory = React.lazy(() => import('./page/notiHistory/NotiHistory'));
const UsageGraph = React.lazy(() => import('./page/usageGraph/UsageGraph'));
const Dashboard = React.lazy(() => import('./page/dashboard/Dashboard'));
const StoreSet = React.lazy(() => import('./page/store/StoreList'));
const ItemList = React.lazy(() => import('./page/item/ItemList'));
const ItemDetail = React.lazy(() => import('./page/item/ItemDetail'));
const ProductList = React.lazy(() => import('./page/product/ProductList'));
const ProductAutoMator = React.lazy(() => import('./page/productAutomator/ProductAutomator'));
const AutomatorDetail = React.lazy(() => import('./page/productAutomator/AutomatorDetail'));
const ProductDetail = React.lazy(() => import('./page/product/ProductDetail'));
const BuyPageSet = React.lazy(() => import('./page/buypageSet/BuyPageSet'));
const PurchaseList = React.lazy(() => import('./page/purchase/PurchaseBundleList'));
const BuypagePolicy = React.lazy(() => import('./page/buypagePolicy/BuypagePolicy'));
const ProfilePage = React.lazy(() => import('./page/profile/Profile'));

const Qna = React.lazy(() => import('./page/qna/Qna'));
const BoardDocWrite = React.lazy(() => import('./page/boardDoc/BoardDocWrite'));
const BoardDocView = React.lazy(() => import('./page/boardDoc/BoardDocView'));
const BoardDocList = React.lazy(() => import('./page/boardDoc/BoardDocList'));

export enum Paths {
  sms = '/sms',
  calendar = '/calendar',
  itemDetail = '/itemList/detail',
  itemList = '/itemList',
  itemCategory = '/itemCategory',
  price = '/price-set',
  buypageList = '/buypageList',
  buyPolicy = '/buyPolicy',
  buypageFieldSet = '/buypageFieldSet',
  buypageSet = '/buypage',
  saleList = '/sale-list',
  storeUserList = '/store-user-list',
  payRegist = '/payRegist',
  memberShip = '/memberShip',
  settlementHistory = '/settlementHistory',
  payFromJanda = '/pay-from-janda',
  purchaseList = '/purchaseList',
  productDetail = '/productList/productDetail',
  productBoard = '/product-board',
  productList = '/productList',
  productAutomator = '/productAutomator',
  autoMatorDetail = '/autoMatorDetail',
  productGroup = '/product-group',
  productCapacity = '/product-capacity',
  storeSet = '/store-set',
  notiHistory = '/notiHistory',
  graph = '/graph',
  error = '/error',
  profile = '/profile',
  qna = '/qna',
  notice = '/board/list/notice',
  bug = '/board/write/bug',
  question = '/board/write/question',
  boardWrite = '/board/write',
  boardView = '/board/view',
  boardList = '/board/list',
  main = '/',
}


const storeCode = getFromUrl("storeCode");


const MainRouter = () => {

  useEffect(() => {
    openChannelTok();
  }, []);

  return <Suspense fallback={<div ></div>}>
    <Switch>
      {/* 홈 */}
      <Route exact path={Paths.main} render={() => <Dashboard />} />
      <Route path={Paths.graph} render={() => <UsageGraph />} />
      <Route exact path={Paths.calendar} render={() => <Calendar />} />

      {/* 상점 */}
      <Route path={Paths.storeSet} render={() => <StoreSet />} />

      {/* 상품 */}
      <Route exact path={Paths.itemDetail + "/:itemId?"} render={() => <ItemDetail />} />
      <Route path={Paths.itemList} render={() => <ItemList />} />
      <Route path={Paths.itemCategory} render={() => <ItemCategory />} />
      <Route path={Paths.productDetail + "/:itemId"} render={() => <ProductDetail />} />
      <Route exact path={Paths.productList + "/:itemId?"} render={() => <ProductList />} />
      <Route exact path={Paths.productAutomator} render={() => <ProductAutoMator />} />
      <Route exact path={Paths.autoMatorDetail + "/:itemId?"} render={() => <AutomatorDetail />} />

      {/* 예약 */}
      {storeCode || <Route path={Paths.buypageSet} render={() => <BuyPageSet />} />}
      <Route path={Paths.purchaseList} render={() => <PurchaseList />} />
      <Route path={Paths.buyPolicy} render={() => <BuypagePolicy />} />
      <Route path={Paths.buypageFieldSet} render={() => <BuypageFieldSet />} />
      {/* <Route path={Paths.buypageList} render={() => <BuyPageList />} /> */}

      {/* 결제 */}
      <Route path={Paths.payFromJanda} render={() => <SettlementDashboard />} />
      <Route path={Paths.memberShip} render={() => <MemberShip />} />
      <Route path={Paths.payRegist} render={() => <PayRegist />} />
      <Route path={Paths.settlementHistory} render={() => <SettlementHistory />} />

      {/* 보드페이지 */}
      <Route path={Paths.boardList + "/:boardKey" + "/:boardDocId?"} render={() => <BoardDocList />} />
      <Route path={Paths.boardView + "/:boardKey/:boardDocId"} render={() => <BoardDocView />} />
      <Route path={Paths.boardWrite + "/:boardKey/:boardDocId?"} render={() => <BoardDocWrite />} />

      {/* 서비스페이지 */}
      <Route path={Paths.qna} render={() => <Qna />} />

      {/* 기타페이지 */}
      <Route exact path={Paths.notiHistory} render={() => <NotiHistory />} />
      <Route exact path={Paths.profile} render={() => <ProfilePage />} />
      <Route render={() => <Page404 />} />
    </Switch>
  </Suspense>
}

export default MainRouter;