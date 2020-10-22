import React from "react"
import dayjs from "dayjs"
import { JDicon } from "@janda-com/front"


type TProduct = {
    name: string;
    count: number;
}

type TData = {
    date: Date,
    product: TProduct
}

interface IProps {
    date: Date,
    datas: TData[]
    onDateChange: (date: Date) => void
}

const ProductViewer: React.FC<IProps> = ({ date, datas, onDateChange }) => {
    const handleDateArrow = (positive: boolean) => {
        // toDate 메서드를통해서 momnet객체에서 Date 객체로 변환가능
        const nextDate = dayjs(date).add(positive ? 1 : -1, "d").toDate()
        onDateChange(nextDate)
    }

    const renderData = Array(7).fill(null).map((_, i) => {
        const Date = dayjs(date).add(i - 3, "day").toDate()
        const productDatas = datas.filter(i => dayjs(date).isSame(i.date));
        const products = productDatas.map(i => i.product);

        console.log(date);
        console.log(i);


        return { Date, products };
    })

    return <div>
        <div>
            <JDicon icon="shortLeft" onClick={() => {
                handleDateArrow(false)
            }} />
            <JDicon icon="shortRight" onClick={() => {
                handleDateArrow(true)
            }} />
            {dayjs(date).format("YYYY.MM.DD")}
        </div>
        {renderData.map(date => {
            return <div>
                {date.products.map(i => {
                    return <div>

                        {/* 아이템 출력 */}
                    </div>
                })}
            </div>
        })}
    </div>
}


export default ProductViewer