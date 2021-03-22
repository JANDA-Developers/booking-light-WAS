import { Flex, JDbutton, JDcontainer, JDradioButton, useRadioButton, WindowSize } from '@janda-com/front';
import { IselectedOption } from '@janda-com/front/dist/types/interface';
import React from 'react';
import { IGraphViewMode } from '../../component/graph/components/ViewIcons';
import JDgraph from '../../component/graph/Graph';
import { useInvoiceFind, useInvoiceList } from '../../hook/useInvoice';
import { Action, ServiceUsageType } from '../../type/api';
import { serviceUsageMapper } from '../../utils/invoiceMapper';
import dayjs from "dayjs";
import { InvoiceGraph } from './components/InvoiceGraph';
import { GraphCard } from './components/GraphCard';
import { enumToOps } from '../../type/const';
import { ScrollBox } from '../../component/scrollBox/ScrollBox';

interface IProp { }

const values = enumToOps(ServiceUsageType, (v) => v);

export const UsageGraph: React.FC<IProp> = () => {
    const { items } = useInvoiceList();
    const radioButtonsHook = useRadioButton([values[0].value]);
    const selectedView = radioButtonsHook.selectedValues[0] as ServiceUsageType;

    const map = items.map(item => ({
        label: item.yyyymm,
        ...serviceUsageMapper(item)
    }));

    console.log({ items });
    console.log({ map });


    const getTargetInvoices = (action: Action, type: ServiceUsageType): IselectedOption[] => {
        const result = map.map(invoice => {
            const target = invoice[action][type];
            console.log(invoice.label.toString())
            return ({
                label: invoice.label.toString(),
                count: target?.count || 1
            })
        }).map(op => ({
            label: op.label,
            value: op.count
        }))

        return result;
    }

    console.log(radioButtonsHook.selectedValues);

    return <JDcontainer size={WindowSize.full} verticalPadding>
        <ScrollBox mb scrollSize="small">
            <JDradioButton btnProps={{ mode: "border" }} only mode="gather"   {...radioButtonsHook} options={values} />
        </ScrollBox>
        <Flex vCenter mb oneone>
            <GraphCard mr title="CREATE" Graph={(props) => <InvoiceGraph datas={getTargetInvoices(Action.CREATE, selectedView)} {...props} />} />
            <GraphCard title="DELETE" Graph={(props) => <InvoiceGraph datas={getTargetInvoices(Action.DELETE, selectedView)} {...props} />} />
        </Flex>
        <Flex vCenter oneone>
            <GraphCard mr title="UPDATE" Graph={(props) => <InvoiceGraph datas={getTargetInvoices(Action.UPDATE, selectedView)} {...props} />} />
            <GraphCard title="READ" Graph={(props) => <InvoiceGraph datas={getTargetInvoices(Action.READ, selectedView)} {...props} />} />
        </Flex>
    </JDcontainer>;
};



export default UsageGraph;