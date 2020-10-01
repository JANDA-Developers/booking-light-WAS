import React from 'react';
import { JDalign, JDicon } from '@janda-com/front';

interface IProp {
    onDateArrow: (direction: boolean) => void;
}

export const Arrows: React.FC<IProp> = ({ onDateArrow }) => {
    return <JDalign className="arrows">
        <JDicon
            icon="shortLeft"
            className="arrows__prev"
            onClick={() => {
                onDateArrow(false);
            }}
        />
        <JDicon
            icon="shortRight"
            className="arrows__next"
            onClick={() => {
                onDateArrow(true);
            }}
        />
    </JDalign>;
};