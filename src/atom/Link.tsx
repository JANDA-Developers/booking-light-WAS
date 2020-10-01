import { JDtypho } from '@janda-com/front';
import { IJDtyphoProp } from '@janda-com/front/dist/components/typho/Typho';
import React from 'react';

interface IProp extends IJDtyphoProp {
    href?: string
}

export const JDlink: React.FC<IProp> = ({ className, href, ...prop }) => {
    return <JDtypho className={`JDlink ${className}`} {...prop} >
        <a href={href}>{prop.children}</a>
    </JDtypho>;
};


export default JDlink;