import { Tiny } from '@janda-com/front';
import React from 'react';
import Timer from 'react-compound-timer/build';
import JDTimer from '../../atom/Timer';

interface IProp {
    timeInit: number
}

export const ExpireTimer: React.FC<IProp> = ({ timeInit }) => {
    return <JDTimer initialTime={timeInit} direction="backward">
        {({ timerState }: any) => {
            return (
                <span className="JDtimer">
                    <span className="JDtimer__minute">
                        <Timer.Days />
                일
                </span>
                    <span className="JDtimer__second">
                        <Timer.Minutes />
                    분
                </span>
                    <Tiny component="span" className="JDtimer__second">
                        <Timer.Seconds />
                        초
                    </Tiny>
                </span>
            );
        }}
    </JDTimer>;
};
