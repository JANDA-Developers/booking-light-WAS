import { IDiv } from '@janda-com/front/dist/types/interface';
import classNames from 'classnames';
import React from 'react';

interface IProp extends IDiv {
    top?: number,
    bottom?: number,
    left?: number,
    right?: number,
    position?: "absolute" | "fixed"
}

// 조금더 좋은 모듈이 될려면 어떻게해야할까 ?
// 좌표값을 어떻게 찾아주는게 좋은 모듈일까?
export const FloatCircle: React.FC<IProp> = ({
    className,
    position = "fixed",
    children,
    top,
    bottom,
    left,
    right,
    ...props
}) => {

    const haveOffset = top || bottom || left || right;

    const classes = classNames('floatCircle', className, {
        'floatCirce--inlineOffset': haveOffset
    })

    return <div className={classes} style={{
        ...props.style,
        top,
        left,
        right,
        bottom,
        position
    }} {...props}>
        {children}
    </div>;
};
