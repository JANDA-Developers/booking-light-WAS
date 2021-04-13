import { Bold, Flex, JDcard, JDcontainer, JDpageHeader, Large, SkipUpdate, WindowSize } from '@janda-com/front';
import React, { useEffect } from 'react';
import { JDicon } from '../../component/icons/Icons';
import { NotiLine } from '../../component/notification/components/NotiLine';
import { useSystemNotiHide, useSystemNotiList, useSystemNotiRead } from '../../hook/useSystemNoti';
import { SystemNotiType } from '../../type/api';
import { groupDateArray } from '../../utils/groupDataArray';

interface IProp { }

export const NotiHistory: React.FC<IProp> = () => {
    const { items, refetch, filter, setFilter, getLoading } = useSystemNotiList();
    const ids = items.map(i => i._id);
    const groupItems = groupDateArray(items, "createdAt");
    const [hideMu] = useSystemNotiHide({ variables: { ids } });
    const [readMu] = useSystemNotiRead({ variables: { ids } });

    const handleRefresh = () => {
        if (refetch)
            refetch()
    }

    const handleHideAll = () => {
        hideMu()
    }

    const notiTypes = Object.values(SystemNotiType);

    const checkOn = (type: SystemNotiType) => filter.type__eq === type ? "on" : "";

    const handleTypeFilter = (type: SystemNotiType) => () => {
        filter.type__eq = type;
        setFilter({
            ...filter
        });
    }

    useEffect(() => {
        readMu();
    }, [items.length]);


    return <div>
        <JDpageHeader title="시스템 알림리스트" desc="시스템 알림 리스트" />
        <JDcontainer verticalPadding size={WindowSize.lg}>
            <SkipUpdate skip={getLoading} >
                {groupItems.map((group, index) => <div key={index + "notiGroup"}>
                    <Flex mb vCenter >
                        <JDicon mr icon="addCircle" />
                        <Bold>{group.date}</Bold>
                    </Flex>
                    {group.items.map((item, i) =>
                        <JDcard key={item._id} mb>
                            <NotiLine  {...item} />
                        </JDcard>
                    )}
                </div>
                )}
            </SkipUpdate>
        </JDcontainer>
    </div>
};

export default NotiHistory;