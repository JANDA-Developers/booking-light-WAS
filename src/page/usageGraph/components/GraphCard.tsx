import { Flex, JDcard } from '@janda-com/front';
import { IJDcardProps } from '@janda-com/front/dist/components/cards/Card';
import { TElements } from '@janda-com/front/dist/types/interface';
import React, { useState } from 'react';
import { IGraphViewMode } from '../../../component/graph/components/ViewIcons';
import { IJDgrpahProps } from '../../../component/graph/Graph';
import { JDicon } from '../../../component/icons/Icons';

interface IProp extends IJDcardProps {
    Graph: React.FC<Partial<IJDgrpahProps>>;
    title: string;
}

export const GraphCard: React.FC<IProp> = ({ Graph, title, ...props }) => {
    const [viewMode, setViewMode] = useState<IGraphViewMode>(IGraphViewMode.line)

    const handleViewMode = (viewMode: IGraphViewMode) => () => {
        setViewMode(viewMode);
    }
    const isOn = (_viewMode: IGraphViewMode) => {
        return viewMode === _viewMode ? "primary" : undefined
    }

    return <JDcard {...props} head={<Flex vCenter between>{title} <div>
        <JDicon onClick={handleViewMode(IGraphViewMode.line)} hover mr="small" color={isOn(IGraphViewMode.line)} icon="barGraph" />
        <JDicon onClick={handleViewMode(IGraphViewMode.list)} hover mr="small" color={isOn(IGraphViewMode.list)} icon="list" />
        <JDicon onClick={handleViewMode(IGraphViewMode.doughnut)} hover color={isOn(IGraphViewMode.doughnut)} icon="graphPie" />
    </div></Flex>} ><Graph viewMode={viewMode} /></JDcard>;
};
