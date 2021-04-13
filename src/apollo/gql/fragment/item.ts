import { gql } from "@apollo/client";
import { F_ATTRIBUTE, F_COLLECTION_DATA_INTERFACE, F_FILE } from "./shared";

export const F_ITEM = gql`
fragment Fitem on IItem {
    ...FcollectionDataInterface
    type
    name
    thumbNail
    price
    code
    categoryName
    currency
    thumbNail
    keywards
    productCount
    description
    categoryId
    descriptionDetail
    attrs {
        ...Fattribute
    }
    images {
        ...Ffile
    }
}
${F_ATTRIBUTE}
${F_COLLECTION_DATA_INTERFACE}
${F_FILE}
`

export const F_ITEM_BOOKING = gql`
fragment FitemBooking on ItemBooking {
 ...Fitem
}
${F_ITEM}
`

export const F_ITEM_GOODS = gql`
fragment FitemGoods on ItemGoods {
    ...Fitem
}
${F_ITEM}
`
//배송그룹?  먼저 배송 플로우 부터 정확하게 알아야 할것 같음...
// 그리고 UI 부터 .... 
// Store에 옵션이 들어갈 확률이 폲음 스토어에 대한 신경도 써야할듯 함...
// 배송에 Item에 어떤 영향을 주느냐에따라서 Goods API 를 따로 분리할 필요가 있을지도...
// ....배송 이라는 계념은 예약과 많이 다르기떄문에 충분히 그럴만함.......!
