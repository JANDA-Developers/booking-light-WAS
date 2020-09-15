import React from "react"
import moment from "moment"
import { JDicon } from "@janda-com/front"


type TItem = {
    name:string;
    count:number;
}

type TData = {
    date: Date,
    item: TItem
}

interface IProps {
    date: Date,
    datas: TData[]
    onDateChange: (date: Date) => void
}

const ProductViewer: React.FC<IProps> = ({ date, datas, onDateChange }) => {
    const handleDateArrow = (positive: boolean) => {
        // toDate 메서드를통해서 momnet객체에서 Date 객체로 변환가능
        const nextDate = moment(date).add(positive ? 1 : -1).toDate()
        onDateChange(nextDate)
    }

    const renderData = Array(7).fill(null).map((_, i) => {
        const Date = moment(date).add(i - 3, "day").toDate()
        const itemDatas = datas.filter(i => moment(date).isSame(i.date));
        const items = itemDatas.map(i => i.item);

        console.log(date);
        console.log(i);


        return { Date, items };
    })

    return <div>
        <div>
            <JDicon icon="shortLeft" onClick={() => {
                handleDateArrow(false)
            }} />
            <JDicon icon="shortRight" onClick={() => {
                handleDateArrow(true)
            }} />
            {moment(date).format("YYYY.MM.DD")}
        </div>
        {renderData.map(date => {
            return <div>
                {date.items.map(i => {
                    return <div>
                        
                        {/* 아이템 출력 */}
                    </div>
                })}
            </div>
        })}
    </div>
}


export default ProductViewer