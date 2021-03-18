import { _IItemFilter, _ProductFilter } from "../type/api";

export const integratedItemSearch = (search?: string): _IItemFilter => {
    return {
        OR: search
            ? [
                  {
                      name__contains: search,
                  },
                  {
                      code__eq: search,
                  },
                  {
                      keywards__in: [search],
                  },
                  {
                      description__contains: search,
                  },
              ]
            : undefined,
    };
};


// export const integratedProductSearchFilter = (search?: string): _ProductFilter => {
//     return {
//         OR: search
//             ? [
//                   {
//                     itemName__eq   
//                   },
//                   {
//                       code__eq: search,
//                   },
//                   {
//                       keywards__in: [search],
//                   },
//                   {
//                       description__contains: search,
//                   },
//               ]
//             : undefined,
//     };
// };
