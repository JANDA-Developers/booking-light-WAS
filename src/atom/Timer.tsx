import React from "react";
import Timer from "react-compound-timer";

export type TimerStateType = "INITED" | "PLAYING" | "PAUSED" | "STOPPED";

interface TimerProps {
    /** Timer count direction */
    direction?: "forward" | "backward";
    /** Inittial time on timer */
    initialTime?: number;
    /** Time to rerender */
    timeToUpdate?: number;
    /** Start timer immediately after render */
    startImmediately?: boolean;
    /** Function to format all values */
    formatValue?: (value: number) => string;
    /** Function that will be called on timer start */
    onStart?: () => any;
    /** Function that will be called on timer resume */
    onResume?: () => any;
    /** Function that will be called on timer pause */
    onPause?: () => any;
    /** Function that will be called on timer stop */
    onStop?: () => any;
    /** Function that will be called on timer reset */
    onReset?: () => any;
    /** Last unit will accumulate time, for example, 26 hours or 90 seconds */
    lastUnit?: "ms" | "s" | "m" | "h" | "d";
    /** Time checkpoints with callback functions */
    checkpoints?: Array<{
        time: number;
        callback: () => any;
    }>;
}

interface IProps extends TimerProps { }

const JDTimer: React.FC<IProps> = props => <Timer {...props} />;

export default JDTimer;
