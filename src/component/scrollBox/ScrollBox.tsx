import { JDatomExtentionSet } from '@janda-com/front/dist/types/interface';
import { IDiv, IUl } from '@janda-com/sms/dist/types/interface';
import classNames from "classnames";
import React from 'react';

export interface IScrollBoxProps extends IUl, JDatomExtentionSet {
    scrollSize?: 'small'
    height?: number,
    maxHeight?: number,
    components?: "ul"
}

export const ScrollBox: React.FC<IScrollBoxProps> = ({ children, components, height, maxHeight, className, scrollSize }) => {

    const classes = classNames('JDscrollBox', className, {
        'JDscrollBox--small': scrollSize === "small"
    });

    const obj = {
        style: {
            height,
            maxHeight
        },
        className: classes
    }

    if (components === "ul") {
        return <ul {...obj}>{children}</ul>
    }

    return <div {...obj}>{children}</div>;
};
