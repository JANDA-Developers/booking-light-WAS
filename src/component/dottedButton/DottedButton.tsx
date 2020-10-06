import classNames from "classnames";
import { JDicon, JDatomClasses } from '@janda-com/front';
import { IDiv, JDatomExtentionSet } from '@janda-com/front/dist/types/interface';
import React, { HTMLAttributes } from 'react';

interface IProp extends JDatomExtentionSet, HTMLAttributes<HTMLButtonElement> { }

export const DottedButton: React.FC<IProp> = ({ className, ...props }) => {
    const classes = classNames('JDdottedButton', className, {
        ...JDatomClasses(props)
    })

    return <button className={classes} {...props}>
        <JDicon color="grey2" mr="large" icon="plus" />
        상점 생성하기
    </button >;
};


export default DottedButton;