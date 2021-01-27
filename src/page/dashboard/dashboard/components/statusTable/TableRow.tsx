import { Bold, Flex, JDbadge, JDphotoFrame, JDtypho } from '@janda-com/front';
import React from 'react';

interface IProp { }

export const TableRow: React.FC<IProp> = () => {
    return <Flex>
        <JDphotoFrame />
        <div>
            <JDbadge />
        </div>
        <Bold size="h6" >

        </Bold>
    </Flex>;
};
