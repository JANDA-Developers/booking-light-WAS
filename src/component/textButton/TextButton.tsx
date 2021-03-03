import React from 'react';
import classnames from 'classnames';
import { ISpan, JDatomExtentionSet } from '@janda-com/front/dist/types/interface';
import { JDatomClasses, JDColor, TextSize } from '@janda-com/front';
// import { textColorClass } from "@janda-com/front/dist/utils/autoClasses";

interface Iprops extends ISpan, JDatomExtentionSet {
    color?: JDColor;
    size?: TextSize;
    anchor?: boolean;
}

const TextButton: React.FC<Iprops> = ({
    anchor,
    size,
    color,
    className,
    ...props
}) => {
    const classNames = classnames('textButton', className, {
        'textButton--anchor': anchor,
        ...JDatomClasses(props),
    });

    return <span className={classNames} {...props} />;
};

export default TextButton;
