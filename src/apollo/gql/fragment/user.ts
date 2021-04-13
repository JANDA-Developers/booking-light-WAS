import { gql } from "@apollo/client";
import { F_BILLING_METHOD } from "./billing";
import { F_SERVICE_PLAN } from "./invoice";
import { F_SETTLEMENT_MALL } from "./settlement";
import { F_COLLECTION_DATA_INTERFACE, F_FILE } from "./shared";
import { F_ZONE_INFO } from "./zoneInfo";

export const F_USER = gql`
  fragment Fuser on IUser {
    ...FcollectionDataInterface
    name
    email
    unReadSystemNoties
    phoneNumber
    profileImage {
        ...Ffile
    }
    isVerifiedPhoneNumber
    isVerifiedEmail
    role
    location {
      address
    }
    introduce
    adminMemo
    company
    zoneinfo {
        ...FzoneInfo
    }
    ...on BusinessUser {
      billingMethod {
        ...FbillingMethod
      }
      subscribPlan {
        ...FservicePlan
      }
      settlementMall {
        ...FsettlementMall
      }
    }
  }
  ${F_FILE}
  ${F_SERVICE_PLAN}
  ${F_SETTLEMENT_MALL}
  ${F_BILLING_METHOD}
  ${F_ZONE_INFO}
  ${F_COLLECTION_DATA_INTERFACE}
`
