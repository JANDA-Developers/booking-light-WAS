import { IselectedOption } from "@janda-com/front/dist/types/interface";
import { IAppContext, TProductStoreMath } from "./context";
import { me_Me as IMe, me_Me_stores as Stores } from "./type/api";

  
export const generateContext = (storeData?: Stores[],user?: IMe):Partial<IAppContext> => {

    let storeptions: IselectedOption[] = [];
    let prodOptions: IselectedOption[] = [];
    let prodStoreMatcher:TProductStoreMath[] = []

  
    storeData?.forEach((sto) => {
      storeptions.push({
        label: sto.name,
        value: sto._id
      })
  
      sto.products.forEach((pro) => {
  
        prodStoreMatcher.push({
          prodId: pro._id,
          storeId: sto._id
        })
  
        prodOptions.push({
          label: pro.name,
          value: pro._id
        })
      })
    })

    return {
        prodStoreMatcher,
        prodOptions,
        storeptions,
        user,
    }
}