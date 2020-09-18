import { JDcontainer } from "@janda-com/front";
import { JDcolumn } from "@janda-com/janda-table";
import React from "react";
import { IGraphViewMode } from "../../component/graph/components/ViewIcons";
import JDgraph from "../../component/graph/Graph";

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

    return <JDcontainer>
        <JDgraph viewMode={IGraphViewMode.doughnut} data={DummyData} />
        <JDgraph viewMode={IGraphViewMode.line} data={DummyData} />
        <JDgraph
            viewMode={IGraphViewMode.list}
            data={DummyData}
            columns={columns}
        />
    </JDcontainer>

}

export default Statistic;