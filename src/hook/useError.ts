import { ERROR_GENERATOR } from "../apollo/gql/error";
import { errorGenerate, errorGenerateVariables } from "../type/api";
import { generateMutationHook } from "../utils/query";

export const useError = generateMutationHook<errorGenerate,errorGenerateVariables>(ERROR_GENERATOR);