import { gql } from "@apollo/client";
import {  F_USERERROR } from "./fragment/fragments";
import { F_SERVICE_PLAN_TEMPLATE } from "./fragment/service";

export const SERVICE_PLAN_DE_SUBSCRIBE = gql`
mutation servicePlanDesubscribe(
    $servicePlanId: ObjectId!
) {
ServicePlanDesubscribe(
    servicePlanId: $servicePlanId
) {
    ok
    error {
        ...FuserError
    }
}
}
${F_USERERROR}
`


export const SERVICE_PLAN_SUBSCRIBE = gql`
mutation servicePlanSubscribe(
    $servicePlanTemplateId: ObjectId!
) {
ServicePlanSubscribe(
    servicePlanTemplateId:$servicePlanTemplateId
) {
    ok
    error {
        ...FuserError
    }
}
}
${F_USERERROR}
`

export const SERVICE_PLAN_TEMPLATE_CREATE = gql`
mutation servicePlanTemplateCreate(
    $input: ServicePlanTemplateCreateInput!
) {
ServicePlanTemplateCreate(
    input:$input
) {
    ok
    error {
        ...FuserError
    }
}
}
${F_USERERROR}
`

export const SERVICE_PLAN_TEMPLATE_UPDATE = gql`
mutation servicePlanTemplateUpdate(
    $params: ServicePlanTemplateUpdateInput!
    $servicePlanTemplateId: ObjectId!
) {
ServicePlanTemplateUpdate(
    params:$params
    servicePlanTemplateId: $servicePlanTemplateId
) {
    ok
    error {
        ...FuserError
    }
}
}
${F_USERERROR}
`

export const SERVICE_PLAN_TEMPLATE_DELETE = gql`
mutation servicePlanTemplateDelete(
    $servicePlanTemplateId: ObjectId!
) {
ServicePlanTemplateDelete(
    servicePlanTemplateId:$servicePlanTemplateId
) {
    ok
    error {
        ...FuserError
    }
}
}
${F_USERERROR}
`

export const SERVICE_PLAN_TEMPLATE_LIST = gql`
query servicePlanTemplateList(
    $serviceProviderName: String!
) {
    ServicePlanTemplateList(
        serviceProviderName:$serviceProviderName
    ) {
        ...FservicePlanTemplate
    }
}
${F_SERVICE_PLAN_TEMPLATE}
`
