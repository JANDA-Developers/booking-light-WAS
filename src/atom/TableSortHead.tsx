import { Flex } from '@janda-com/front';
import { JDicon } from '@janda-com/front';
import { IDiv } from '@janda-com/front/dist/types/interface';
import React from 'react';


interface IProp extends IDiv {
    decrease: boolean;
    onClick: () => void;
}

export const SortHead: React.FC<IProp> = ({ children, decrease, onClick, ...props }) => {
    return <Flex vCenter onClick={onClick} {...props}>{children} <JDicon icon={decrease ? "arrowUp" : "arrowDown"} /></Flex>;
};

export default SortHead;
