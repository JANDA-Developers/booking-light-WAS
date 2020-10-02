import React from 'react';
import { IJDalignProp, JDalign, JDatomClasses, JDColor, JDsplinter, JDtypho, TextSize, TMarginSize } from '@janda-com/front';
import { IJDtyphoProp } from '@janda-com/front/dist/components/typho/Typho';
import { IDiv } from '@janda-com/front/dist/types/interface';
import classNames from "classnames";

interface IProp extends IJDtyphoProp { }

export const B: React.FC<IProp> = (prop) => {
    return <JDtypho weight={600} {...prop} />;
};

export const Thin: React.FC<IProp> = (prop) => {
    return <JDtypho weight={100} {...prop} />
}

interface ISplitProp {
    size?: TMarginSize;
    color?: JDColor;
    textSize?: TextSize;
}

export const Split: React.FC<ISplitProp> = (prop) => {
    return <JDsplinter  {...prop} />
}

interface IHorizen extends IDiv {
    margin: number;
}
export const Horizen: React.FC<IHorizen> = ({ margin, className, ...props }) => {
    const classes = classNames('JDhorizen', className, {
        ...JDatomClasses(props)
    })

    const Margin = margin * 0.4;

    return <div {...props} style={{
        margin: Margin + "rem",
        marginLeft: 0,
        marginRight: 0
    }} className={classes} />
}


interface IVertical extends IDiv {
    margin: number;
    height: number;
}
export const Vertical: React.FC<IVertical> = ({ margin, height, className, ...props }) => {
    const classes = classNames('JDvertical', className, {
        ...JDatomClasses(props)
    })

    const Height = height * 0.4;
    const Margin = margin * 0.4;

    return <div {...props} style={{
        height: Height + "rem",
        margin: Margin + "rem",
        marginTop: 0,
        marginBottom: 0
    }} className={classes} />
}

export const Grid: React.FC<IJDalignProp> = (props) => {
    return <JDalign grid {...props} />
}

interface IRowProp extends IJDalignProp {
    wlg?: number;
    lg?: number;
    md?: number;
    sm?: number;
    full?: number;
}

export const Row: React.FC<IRowProp> = ({ wlg, lg, md, sm, full, ...props }) => {
    return <JDalign col={{ wlg, lg, md, sm, full }} {...props} />
}

interface IFlexProp extends IJDalignProp {
    center?: boolean;
    vCenter?: boolean;
    between?: boolean;
    around?: boolean;
    wrap?: boolean;
    end?: boolean;
    column?: boolean;
    oneone?: boolean;
    grow?: boolean;
}

export const Flex: React.FC<IFlexProp> = ({ center, vCenter, between, around, wrap, end, column, oneone, grow, ...props }) => {
    return <JDalign flex={{
        center, vCenter, between, around, wrap, end, column, oneone, grow
    }} {...props} />
}
