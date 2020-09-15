import { JDcontainer } from "@janda-com/front"
import React from "react"
import ProductViewer from "../../component/ProductViewer/ProductViewer"

const Dashboard = () => {
    const datas = [
        { date: new Date(), item: { name: "item 1", count: 1 } },
        { date: new Date(), item: { name: "item 2", count: 2 } },
        { date: new Date(), item: { name: "item 3", count: 3 } },
        { date: new Date(), item: { name: "item 4", count: 4 } },
        { date: new Date(), item: { name: "item 5", count: 5 } },
        { date: new Date(), item: { name: "item 6", count: 6 } },
        { date: new Date(), item: { name: "item 7", count: 7 } },
    ];

    return <div>
        <JDcontainer>
            <ProductViewer date={new Date()} datas={datas} onDateChange={() => { }} />
        </JDcontainer>
    </div>
}


export default Dashboard