import { JDalign, JDcard, JDtypho } from "@janda-com/front";
import { JDcolumn } from "@janda-com/janda-table";
import React from "react";
import { IGraphViewMode } from "../../../component/graph/components/ViewIcons";
import JDgraph from "../../../component/graph/Graph";

interface IProps {
}

const DummyData = {
    labels: ["하나", "둘", "셋", "넷"],
    datasets: [{
        data: [20, 50, 80, 30]
    }]
}

const Statistic: React.FC<IProps> = () => {


    const columns: JDcolumn<any>[] = [
        {
            Header: "구분",
            accessor: "data",
            Cell: ({ index }) => {
                return <div>{DummyData.labels[index || 0]}</div>;
            }
        },
        {
            Header: "매출",
            accessor: "data",
            Cell: ({ original }) => {
                return <div>{original}</div>;
            }
        }
    ];


    type TTitleProp = {
        title: string;
        desc: string;
    }

    const TitlePart: React.FC<TTitleProp> = ({ desc, title }) => {
        return <JDalign mb="normal" style={{
            alignItems: "end"
        }} flex>
            <JDtypho mr="small" size="h6" weight={600}>{title}</JDtypho>
            <JDtypho style={{
                alignSelf: "flex-end"
            }} >{desc}</JDtypho>
        </JDalign>
    }

    return <div>
        <JDalign grid >
            <JDalign col={{
                full: 6,
                md: 12
            }}>
                <JDcard mode="border">
                    <TitlePart title="잔다영화관" desc="상점 총 매출" />
                    <JDgraph viewMode={IGraphViewMode.doughnut} data={DummyData} />
                </JDcard>
            </JDalign>
            <JDalign col={{
                full: 6,
                md: 12
            }}>
                <JDcard mode="border">
                    <TitlePart title="잔다영화관" desc="상점 총 매출" />
                    <JDgraph viewMode={IGraphViewMode.line} data={DummyData} />
                </JDcard>
            </JDalign>
        </JDalign>
        <JDcard mode="border" >
            <JDgraph
                viewMode={IGraphViewMode.list}
                data={DummyData}
                columns={columns}
            />
        </JDcard>
    </div>

}

export default Statistic;