import { ERROR_GENERATOR } from "../apollo/gql/error";
import { errorGenerate, errorGenerateVariables } from "../type/api";
import { generateMutationHook } from "../utils/hookGen";

export const useError = generateMutationHook<errorGenerate,errorGenerateVariables>(ERROR_GENERATOR);