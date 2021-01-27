import { JDatomClasses, s4, TextAlign, textAlignClass, TextSize } from '@janda-com/front';
import { IUl, JDatomExtentionSet, TElements } from '@janda-com/front/dist/types/interface';
import classNames from 'classnames';
import React, { Fragment } from 'react';
import { IScrollBoxProps, ScrollBox } from '../scrollBox/ScrollBox';

export interface IProps extends IScrollBoxProps {
    className?: string;
    /** border 스타일을 가질지 결정 */
    border?: boolean;
    /** odd에 background 를 줄지 결정 */
    stripe?: boolean;
    /** index를 렌더링 할지 결정 */
    withIndex?: boolean;
    /** 내부내용 array strign또는 Element */
    contents: any[];
    /** 정렬 */
    align?: TextAlign;
    /** 줄바꿈 없음 */
    noWrap?: boolean;
    /** 사이즈 */
    size?: TextSize;
    /** 라인 높이 1~9  */
    lineHeight?: number;
    minList?: number;
    /** 라인 헤더 EG) *  */
    linePoint?: string;
}

export const JDlist: React.FC<IProps> = ({
    children,
    className,
    noWrap,
    border,
    stripe,
    withIndex,
    lineHeight = 5,
    align = 'left',
    contents,
    minList = 10,
    linePoint,
    id,
    size,
    ...props
}) => {
    const classes = classNames('JDlist', className, {
        'JDlist--bordered': border,
        'JDlist--stripe': stripe,
        'JDlist--1': lineHeight === 1,
        'JDlist--2': lineHeight === 2,
        'JDlist--3': lineHeight === 3,
        'JDlist--4': lineHeight === 4,
        'JDlist--5': lineHeight === 5,
        'JDlist--6': lineHeight === 6,
        'JDlist--7': lineHeight === 7,
        'JDlist--8': lineHeight === 8,
        'JDlist--9': lineHeight === 9,
        'JDlist--whiteSpace': noWrap,
        ...textAlignClass(align),
        ...JDatomClasses(props),
    });

    let filledContents: TElements[] = [...contents];
    if (contents.length < minList) {
        filledContents = [...contents, ...Array(minList - contents.length).fill("")]
    }

    return (
        <ScrollBox components={'ul'} className={classes} {...props}>
            {filledContents.map((content, index) => (
                <li className="JDlist__li" key={id ? id + index : s4()}>
                    <Fragment>
                        {linePoint ||
                            (withIndex && (
                                <span className="JDlist__index">
                                    {withIndex && index}
                                    {linePoint && `${linePoint}`}
                                </span>
                            ))}
                        {content}
                    </Fragment>
                </li>
            ))}
        </ScrollBox>
    );
};

export default JDlist;
