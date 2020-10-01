import { JDalign, JDcard, JDtypho } from '@janda-com/front';
import { CardProps } from '@janda-com/front/dist/components/cards/Card';
import { JDatomExtentionSet, TElements } from '@janda-com/front/dist/types/interface';
import React from 'react';

interface IProp extends CardProps, JDatomExtentionSet {
    contents: TElements[]
}

export const PolicyCard: React.FC<IProp> = ({ contents, ...props }) => {

    const contentLeft = contents.slice(0, Math.floor(contents.length / 2));
    const contentRight = contents.slice(Math.ceil(contents.length / 2), contents.length);

    return <JDcard mb="no" {...props} mode="border" className="PolicyCard">
        <div>
            <JDtypho size="small" color="grey4" grid>
                <JDalign mr="huge" col={{
                    full: 6,
                    md: 12
                }}>
                    {contentLeft.map((content, i) =>
                        <JDtypho key={"PlicyCardLeft" + i} mb="normal" color="grey4">
                            {content}
                        </JDtypho>
                    )}
                </JDalign>
                <JDalign col={{
                    full: 6,
                    md: 12
                }}>
                    {contentRight.map((content, i) =>
                        <JDtypho key={"PlicyCardRight" + i} mb="normal" color="grey4">
                            {content}
                        </JDtypho>
                    )}
                </JDalign>
            </JDtypho>
        </div>
    </JDcard>;
};
