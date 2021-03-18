
import React, { Component } from 'react';
import PropTypes from 'prop-types';

// Omits "keysToOmit" from "object"
export function omit(object: any, keysToOmit: any) {
    const result = {};

    Object.keys(object).forEach(key => {
        if (keysToOmit.indexOf(key) === -1) {
            // @ts-ignore
            result[key] = object[key];
        }
    });

    return result;
}

const PROPS_TO_OMIT = [
    'children',
    'contentClassName',
    'ratio',
    'ratioClassName',
    'style',
    'tagName',
];

const CONTENT_DIV_STYLE: React.CSSProperties = {
    height: '100%',
    left: 0,
    position: 'absolute',
    top: 0,
    width: '100%',
};

const RATIO_DIV_STYLE: React.CSSProperties = {
    height: 0,
    position: 'relative',
    width: '100%',
};



interface IProps {
    className?: string,
    contentClassName?: string,
    // with가 height를 결정하게하는 ratio임.
    ratio?: number,
    ratioClassName?: string,
    style?: React.CSSProperties,
    tagName: string,
};

export const Ratio: React.FC<IProps> = (props) => {
    const {
        tagName = 'div',
        ratio = 1,
        ratioClassName = '',
        className = '',
        contentClassName = '',
        style = {},
        children
    } = props;

    const Tag: any = tagName;

    const cssStyle: React.CSSProperties = {
        display: 'block',
        ...style,
    };

    const paddingTop = ratio === 0 ? 100 : 100 / ratio;


    return <Tag
        {...omit(props, PROPS_TO_OMIT)}
        className={`Ratio ${className}`}
        style={cssStyle}
    >
        <div
            className={`Ratio-ratio ${ratioClassName}`}
            style={{
                ...RATIO_DIV_STYLE as any,
                paddingTop: `${paddingTop}%`,
            }}
        >
            <div
                className={`Ratio-content ${contentClassName}`}
                style={CONTENT_DIV_STYLE}
            >
                {children}
            </div>
        </div>
    </Tag>
}
