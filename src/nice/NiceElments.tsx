import React from "react";
import { Helmet } from "react-helmet";
import "../nice/niceGlobal"
export interface INiceElementProp {
  PayMethod: "CARD" | "BANK" | "VBANK" | "CELLPHONE";
  GoodsName: string;
  Amt: string;
  MID: string;
  Moid: string;
  hex: string;
  BuyerName: string;
  BuyerEmail: string;
  BuyerTel: string;
  // ReturnURL [Mobile only] 백엔드님이 설정해줄값
  ReturnURL: string;
  // yyyymmdd
  VbankExpDate: string;
  merchantID: string;
  // 이것도 백엔드님한테서 받아야할듯 아니면 뭐 내가해도되고
  IspCancelUrl: string;
  WapUrl: string;
  sid: string;
  // jdReturnUrl: string;
  logo?: string;
  isAuth: boolean;
  // yyyymmddhhmmss
  EdiDate: string;
  endPoint: string;
}

const NiceElments: React.FC<Partial<INiceElementProp>> = ({
  Amt,
  BuyerEmail,
  BuyerName,
  BuyerTel,
  GoodsName,
  // jdReturnUrl,
  hex,
  logo,
  Moid,
  PayMethod,
  ReturnURL,
  VbankExpDate,
  merchantID,
  WapUrl,
  IspCancelUrl,
  sid,
  EdiDate,
  endPoint,
}) => {
  return (
    <div
      style={{
        display: "none",
      }}
    >
      <Helmet>
        <meta charSet="utf-8" />
        <script
          src="https://web.nicepay.co.kr/v3/webstd/js/nicepay-3.0.js"
          type="text/javascript"
        />
      </Helmet>
      <form method="POST" id="NICE_PAY_FORM" name="payForm" data-url={endPoint}>
        <span>결제 수단</span>
        <input
          id="NicePayMethod"
          type="text"
          name="PayMethod"
          onChange={() => { }}
          value={PayMethod}
        />
        <span>결제 상품명</span>
        <input
          id="NiceGoodsName"
          type="text"
          name="GoodsName"
          onChange={() => { }}
          value={GoodsName}
        />
        <span>결제 상품개수</span>
        <input
          id="NiceGoodsCnt"
          type="text"
          name="GoodsCnt"
          onChange={() => { }}
          defaultValue={1}
        />
        <span>결제 상품금액</span>
        <input id="NiceBuyerName" type="text" name="Amt" onChange={() => { }} value={Amt} />
        <span>구매자명</span>
        <input
          type="text"
          name="BuyerName"
          onChange={() => { }}
          value={BuyerName}
        />
        <span>구매자 연락처</span>
        <input
          id="NiceBuyerTel"
          type="text"
          name="BuyerTel"
          onChange={() => { }}
          value={BuyerTel}
        />
        <span>상품 주문번호</span>
        <input id="NiceMoid" type="text" name="Moid" onChange={() => { }} value={Moid} />
        <span>상점 아이디</span>
        <input id="NicemerchantID" type="text" name="MID" onChange={() => { }} value={merchantID} />
        <input
          type="hidden"
          name="CharSet"
          onChange={() => { }}
          value="utf-8"
        />{" "}
        <input
          id="NiceBuyerEmail"
          type="hidden"
          name="BuyerEmail"
          onChange={() => { }}
          defaultValue={BuyerEmail}
        />{" "}
        <input
          type="hidden"
          name="GoodsCl"
          onChange={() => { }}
          defaultValue={1}
        />{" "}
        <input
          type="hidden"
          name="TransType"
          onChange={() => { }}
          defaultValue={0}
        />{" "}
        <input
          id="NiceEdiDate"
          type="hidden"
          name="EdiDate"
          onChange={() => { }}
          value={EdiDate}
        />{" "}
        <input id="NiceSignData" type="hidden" name="SignData" onChange={() => { }} value={hex} />{" "}
        <input type="hidden" name="GoodsCl" onChange={() => { }} value={hex} />{" "}
        <input
          id="NiceIspCancelUrl"
          type="hidden"
          name="IspCancelUrl"
          onChange={() => { }}
          value={IspCancelUrl}
        />{" "}
        <input
          id="ReqReserved"
          name="ReqReserved"
          onChange={() => { }}
          value=""
        />{" "}
        <input id="NiceReqReturnURL"
          name="ReturnURL" onChange={() => { }} value={ReturnURL} />
        <input type="hidden" name="AcsNoIframe" onChange={() => { }} value="Y" />
        <input
          id="ReqLogoImage"
          type="text"
          name="LogoImage"
          onChange={() => { }}
          value={logo}
        />
        <input id="NiceNpLang" type="hidden" name="NpLang" onChange={() => { }} value="KO" />
        <a href="#" className="btn_blue" onClick={() => { }}>
          REQUEST
        </a>
      </form>
    </div>
  );
};

export default NiceElments;
