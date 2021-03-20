import { IselectedOption } from '@janda-com/front/dist/components/select/SelectBox';
import React from 'react';
import { IGraphViewMode } from '../../../component/graph/components/ViewIcons';
import JDgraph, { IJDgrpahProps } from '../../../component/graph/Graph';

interface IProp extends Partial<IJDgrpahProps> {
    datas: IselectedOption[];
}

export const InvoiceGraph: React.FC<IProp> = ({ datas, ...props }) => {
    const data = datas.map(d => d.value)
    const labels = datas.map(d => d.label)
    console.log({ labels });
    return <JDgraph data={{ datasets: [{ data: data, label: "11" }], labels: labels }} viewMode={IGraphViewMode.doughnut} {...props} />;
};
