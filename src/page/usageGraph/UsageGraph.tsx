import { JDcontainer, WindowSize } from '@janda-com/front';
import React from 'react';
import { IGraphViewMode } from '../../component/graph/components/ViewIcons';
import JDgraph from '../../component/graph/Graph';

interface IProp { }

export const UsageGraph: React.FC<IProp> = () => {
    // const {} = use
    return <JDcontainer size={WindowSize.full} verticalPadding>
        {/* <JDgraph columns={} data={{ datasets: [{ data: [3, 5, 6] }] }} viewMode={IGraphViewMode.doughnut} /> */}
    </JDcontainer>;
};



export default UsageGraph;