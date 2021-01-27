import { Flex, JDcard, JDcontainer, JDdayPickerModal, useDayPicker, useModal, WindowSize } from '@janda-com/front';
import React from 'react';
import { DateChangeHeader } from '../../../component/dateChangeHeader/DateChangeHeader';
import { DashboardContext, IDashbaordContext } from './context';
import List from "../../../component/list/List"
import { ProductGraph } from './components/statusTable/ProductGraph';
import { IDashbaordWrapContext } from './DashboardWrap';
import CountCard from './components/statusTable/statusCard/CountCard';

interface IProp {
    context: IDashbaordWrapContext;
}

export const Dashboard: React.FC<IProp> = ({ context }) => {
    const { dayPickerHook } = context;
    const calModalHook = useModal(false);

    const contextValue: IDashbaordContext = {
        calModalHook,
        ...context
    }


    return <DashboardContext.Provider value={contextValue}>
        <JDcontainer size={WindowSize.full}>
            <DateChangeHeader mb dayPickerHook={dayPickerHook} calModalHook={calModalHook} />
            <JDdayPickerModal {...dayPickerHook} modalHook={calModalHook} />
            <JDcard mb mode="border">
                전체상품 현황
        </JDcard>
            <Flex mb between grow>
                <CountCard mr type="total" />
                <CountCard mr type="complete" />
                <CountCard mr type="unPaied" />
                <CountCard type="cancel" />
            </Flex>
            <List contents={[<ProductGraph />, <ProductGraph />, <ProductGraph />, <ProductGraph />]} />

            <JDcard mode="border">

            </JDcard>
            <JDcard>

            </JDcard>
        </JDcontainer>
    </DashboardContext.Provider>;
};

export default Dashboard;
