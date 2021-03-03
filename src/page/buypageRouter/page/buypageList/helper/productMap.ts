import { getAverage } from "@janda-com/front";
import { productList_ProductList_items,  storeFindByCode_StoreFindByCode_items } from "../../../../../type/api";
import { IBuyPageContext } from "./context";

export interface IBuypageProductData extends storeFindByCode_StoreFindByCode_items {
    products: productList_ProductList_items[]
    lowPrice: number;
    averagePrice: number;
}

export const productMap = ({store}: IBuyPageContext, products: productList_ProductList_items[]) => {
    const items = store.items;

    const bundle:IBuypageProductData[] = items?.map(item => ({
        ...item,
        ...genBundleInfo(item,products),
    })) || []

    return bundle
}

const genBundleInfo = (item:storeFindByCode_StoreFindByCode_items, products:productList_ProductList_items[] ):Pick<IBuypageProductData,"lowPrice" | "averagePrice" | "products"> =>  {
    let lowerPrice = 1000000000;
    const filteredProducts = products.filter(pd => {
        const checked = pd.itemCode === item.code;

        if(checked) {
            if( pd.price< lowerPrice)
            lowerPrice = pd.price; 
        }
    })

    
    return ({
        averagePrice: getAverage(filteredProducts.map(p => p.price)),
        lowPrice: lowerPrice,
        products,
    })
}