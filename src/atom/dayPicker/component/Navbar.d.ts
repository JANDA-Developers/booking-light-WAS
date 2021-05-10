/// <reference types="react" />
import PropTypes from 'prop-types';
export declare const JDMonthTextChanger: (Month: string | number) => string;
declare const Navbar: {
  ({ onPreviousClick, onNextClick, className }: any): JSX.Element;
  propTypes: {
    onPreviousClick: PropTypes.Requireable<(...args: any[]) => any>;
    onNextClick: PropTypes.Requireable<(...args: any[]) => any>;
    nextMonth: PropTypes.Requireable<Date>;
    previousMonth: PropTypes.Requireable<Date>;
    className: PropTypes.Requireable<string>;
    localeUtils: PropTypes.Requireable<object>;
  };
  defaultProps: {
    onPreviousClick: () => void;
    onNextClick: () => void;
    nextMonth: Date;
    previousMonth: Date;
    className: string;
    localeUtils: {};
  };
};
export default Navbar;
