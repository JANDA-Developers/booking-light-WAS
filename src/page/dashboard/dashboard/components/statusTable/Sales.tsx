import React from 'react';
import { IGraphViewMode } from 'src/component/graph/components/ViewIcons';
import JDgraph from "src/component/graph/Graph"

interface IProp { }

export const StatusTable: React.FC<IProp> = () => {


    const DummyData = {
        labels: ["하나", "둘", "셋", "넷"],
        datasets: [{
            data: [20, 50, 80, 30]
        }]
    }

    return <div >
        <JDgraph viewMode={IGraphViewMode.doughnut} data={DummyData} />
    </div>;
};
