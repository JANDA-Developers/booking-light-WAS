import { arraySum } from "@janda-com/front";
import { useState } from "react"
import { BookingInput, CapacityInput, Fproduct, FproductBooking, productList_ProductList_items_ProductBooking, productList_ProductList_items_ProductBooking_capacityDetails, productList_ProductList_items_ProductBooking_usageDetails } from "../type/api"

export interface IBookingInputData extends BookingInput {
    productOrigin: Partial<FproductBooking>
}

export interface IUseBookingsInput extends ReturnType<typeof useBookingsInput> {} 
export const useBookingsInput = (defaultProps: IBookingInputData[]) => {
    const [bookingInputs, setBookingInputs] = useState<IBookingInputData[]>(defaultProps);


    const recalculatedGet = (bookingInputs:IBookingInputData[]) => {
        return  bookingInputs.map(bi => ({
            ...bi,
            priceOrigin: cdPrices(bi.countDetails || []) 
        }))
    }

    const cdPrices = (cd:CapacityInput[]):number => {
        return arraySum(cd.map(cd => cd.price)) || 0;
    }

    const priceSum = arraySum(bookingInputs.map(input => input.priceOrigin || 0));
    
    const findBookingInput = (pid:string) => {
        return bookingInputs.find(bi => bi.productId === pid);
    }

    const findCpacity = (pid:string, key:string)=> {
        const bookingInput = findBookingInput(pid);
        return (bookingInput?.countDetails || []).find(detail => detail.key === key);
    }

    const removeProduct = (pid:string) => {
        const targetIndex = bookingInputs.findIndex(prod => prod.productId === pid);
        bookingInputs.splice(targetIndex,1);
        setBookingInputs([...recalculatedGet(bookingInputs)]);
    }
    
    const removeCapacity = (pid:string, key:string) => {
        const bookingInput = findBookingInput(pid);
        if(!bookingInput) return;
        if(!bookingInput.countDetails) return;

        const targetIndex = bookingInput.countDetails.findIndex(cd => cd.key === key);
        bookingInput.countDetails.splice(targetIndex,1);
        const len  = bookingInput.countDetails.length;
        
        if(bookingInput.countDetails.length <1) {
            removeProduct(pid)
            return;
        }

        setBookingInputs([...recalculatedGet(bookingInputs)]);
    }

    const addProduct = (bookingInput:IBookingInputData) => {
        bookingInputs.push(bookingInput);
        setBookingInputs([...recalculatedGet(bookingInputs)]);
    }
    
    const addCpacity = (pid:string,cp:CapacityInput) => {
        const target = findBookingInput(pid);
        if(!target) return;
        target.countDetails?.push(cp);

        setBookingInputs([...recalculatedGet(bookingInputs)]);
    }

    // 하나의 캐파시티변경
    const capacityChange = (pid:string ,cp: CapacityInput) => {
        const target = findCpacity(pid,cp.key);
        if(!target) {
            console.log("addCpacity Triggered");
            addCpacity(pid,{...cp})
            return;
        }
        if(cp.count === 0){
            removeCapacity(pid,cp.key);
            return;
        } 
        target.price = cp.price;
        target.count = cp.count;
        
        setBookingInputs([...recalculatedGet(bookingInputs)]);
    }


    // 없으면 추가 있으면 캐파시티 변경
    const capacityChangeMaster = (product:productList_ProductList_items_ProductBooking, cd: productList_ProductList_items_ProductBooking_usageDetails | productList_ProductList_items_ProductBooking_capacityDetails, num:number) => {
        const isIncluded = findBookingInput(product._id);
        const update: CapacityInput = { count: num, key: cd.key, label: cd.label, price: (cd.price * num) };
        if (isIncluded) {
            capacityChange(product._id, update);
        } else {
            addProduct({ productOrigin: product, itemId: product._itemId, productId: product._id, countDetails: [update] })
        }
    }


    

    return { priceSum, bookingInputs, setBookingInputs, capacityChange,addCpacity,addProduct, removeCapacity,removeProduct, findCpacity,findBookingInput, capacityChangeMaster}
}