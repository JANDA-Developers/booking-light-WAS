import { getAverage } from "@janda-com/front";
import { isEmpty } from "lodash";
import { itemList_ItemList_items, itemList_ItemList_items_ItemBooking, productList_ProductList_items,  storeFindByCode_StoreFindByCode_items } from "../../../../../type/api";
import { IBuyPageContext } from "./context";

export interface IBuypageProductData extends itemList_ItemList_items_ItemBooking {
    products: productList_ProductList_items[]
    lowPrice: number;
    averagePrice: number;
}

export const productMap = (items: itemList_ItemList_items_ItemBooking[], products: productList_ProductList_items[]) => {
    const bundle:IBuypageProductData[] = (items?.map(item => ({
        ...item,
        ...genBundleInfo(item, products),
    })) || []).filter(bundle => !isEmpty(bundle.products))

    return bundle
}

const genBundleInfo = (item:itemList_ItemList_items_ItemBooking, products:productList_ProductList_items[] ):Pick<IBuypageProductData,"lowPrice" | "averagePrice" | "products"> =>  {
    let lowPrice = 1000000000;

    const filteredProducts = products.filter(pd => {
        const checked = pd._itemId === item._id;
        
        if(checked) {

            //최저가 노출 로직 캐파시티의 첫번쨰가 대표상품으로 간주
            const price = pd.capacityDetails[0].price;
            if( price < lowPrice)
                lowPrice = price; 
        }
    })

    
    return ({
        averagePrice: getAverage(filteredProducts.map(p => p.price)),
        lowPrice: lowPrice,
        products,
    })
}