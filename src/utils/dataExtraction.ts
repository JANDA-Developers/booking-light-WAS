import { DEFAULT_PAGE_INFO, isEmpty } from "@janda-com/front";
import { IPageInfo } from "@janda-com/front/dist/types/interface";

function extractDoc<T, K extends keyof T, C extends keyof T[K], D>(
    data: T | undefined,
    queryName: K,
    dataName: C | undefined,
    falsyReturn: D
  ): C extends undefined ? T[K] | D : T[K][C] | D {
    if (isEmpty(data) || isEmpty(data[queryName])) return falsyReturn as any;
  
    let inData: any = data[queryName];
  
    const { error } = inData;
  
    if (error) return falsyReturn as any;
  
    if (dataName && inData[dataName]) return inData[dataName];
  
    return inData;
  }
  
interface TFalseResult<D> {
    items: D;
    pageInfo: IPageInfo;
}

interface TPageInfo<QueryName> {
    pageInfo: IPageInfo;
}

  // this is used for pagination
function extractPageDoc<T, QueryName extends keyof T, DataKey extends keyof T[QueryName] ,  D>(
    data: T | undefined | null,
    queryName: QueryName,
    dataKey: DataKey,
    falsyData: D
  ): T[QueryName] | TFalseResult<D> {

    const falseResult = {
        items: falsyData,
        pageInfo: DEFAULT_PAGE_INFO,
      }

    if (isEmpty(data)) return falseResult;
    if (isEmpty(data[queryName])) return falseResult;
    if (isEmpty(data[queryName][dataKey])) return falseResult;
  
    return  data[queryName];
  }
  
  
  export {extractPageDoc}
  export default extractDoc;
  