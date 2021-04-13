import { nicePayAuthData } from "../../../hook/usePurchase"
import { INiceElementProp } from "../../../nice/NiceElments"
import { Fstore } from "../../../type/api"
import { nicePayJDlogo } from "../../../type/const"
import { AnonyMouseVerifiData } from "../page/components/AnonyPurchaseForm"

interface IGetNicePropertyProp {
    anonyUserInfo?:AnonyMouseVerifiData
    niceAuthData?:nicePayAuthData 
    store: Fstore
}

export const getNiceProperty = ({ store, anonyUserInfo, niceAuthData}:IGetNicePropertyProp) => {

    const niceInfo:Partial<INiceElementProp> = {
    ReturnURL: process.env.REACT_APP_API_NICE_PAY_END_POINT!,
    endPoint: process.env.REACT_APP_API_NICE_PAY_END_POINT!,
    BuyerEmail: anonyUserInfo?.email!,
    BuyerName: anonyUserInfo?.name!,
    Amt: niceAuthData?.priceOrigin.toString()!,
    BuyerTel: anonyUserInfo?.phoneNumber,
    EdiDate: niceAuthData?.editDate!,
    GoodsName: store.name,
    IspCancelUrl: location.href,
    Moid:niceAuthData?.moid!,
    PayMethod: "CARD",
    hex: niceAuthData?.hash!,
    isAuth:niceAuthData ? true : false,
    logo: nicePayJDlogo,
    CustomParam: niceAuthData?.customParam!,
    MID: "stayjand1m",
    merchantID: "stayjand1m"
    }

    return niceInfo
}