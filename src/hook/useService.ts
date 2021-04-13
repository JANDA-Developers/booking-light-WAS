import { getRefetch } from "@janda-com/front";
import { SERVICE_PLAN_DE_SUBSCRIBE, SERVICE_PLAN_SUBSCRIBE, SERVICE_PLAN_TEMPLATE_CREATE, SERVICE_PLAN_TEMPLATE_DELETE, SERVICE_PLAN_TEMPLATE_LIST, SERVICE_PLAN_TEMPLATE_UPDATE } from "../apollo/gql/service";
import { ME } from "../apollo/gql/user";
import {  servicePlanDesubscribe, servicePlanDesubscribeVariables, servicePlanSubscribe, servicePlanSubscribeVariables, servicePlanTemplateCreate, servicePlanTemplateCreateVariables, servicePlanTemplateDelete, servicePlanTemplateDeleteVariables, servicePlanTemplateList, servicePlanTemplateListVariables, servicePlanTemplateList_ServicePlanTemplateList, servicePlanTemplateUpdate, servicePlanTemplateUpdateVariables, _IItemFilter, _IItemSort, _InvoiceFilter, _InvoiceSort} from "../type/api";
import {  generateMutationHook, generateQueryHook } from "../utils/query";

export const useServicePlanSubscribe = generateMutationHook<servicePlanSubscribe,servicePlanSubscribeVariables>(SERVICE_PLAN_SUBSCRIBE,{...getRefetch(ME)});
export const useServicePlanSubDescribe = generateMutationHook<servicePlanDesubscribe,servicePlanDesubscribeVariables>(SERVICE_PLAN_DE_SUBSCRIBE,{...getRefetch(ME)});

export const useServicePlanTemplateList = generateQueryHook<servicePlanTemplateList, servicePlanTemplateList_ServicePlanTemplateList[],servicePlanTemplateListVariables>(SERVICE_PLAN_TEMPLATE_LIST);
export const useServiceTemplateCreate = generateMutationHook<servicePlanTemplateCreate,servicePlanTemplateCreateVariables>(SERVICE_PLAN_TEMPLATE_CREATE,{...getRefetch(SERVICE_PLAN_TEMPLATE_LIST)});
export const useServiceTemplateDelete = generateMutationHook<servicePlanTemplateDelete,servicePlanTemplateDeleteVariables>(SERVICE_PLAN_TEMPLATE_DELETE,{...getRefetch(SERVICE_PLAN_TEMPLATE_LIST)});
export const useServiceTemplateUpdate = generateMutationHook<servicePlanTemplateUpdate,servicePlanTemplateUpdateVariables>(SERVICE_PLAN_TEMPLATE_UPDATE,{...getRefetch(SERVICE_PLAN_TEMPLATE_LIST)});
