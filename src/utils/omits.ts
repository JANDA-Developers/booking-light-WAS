const omitDeep = require("omit-deep-lodash");
const defaultOmits = ["createdAt", "updatedAt", "__typename", "isDelete", "_id",];

export function omits <T>(obj:T, keys: (keyof T)[] = []):T {
    return omitDeep(obj,...defaultOmits,...keys)
}