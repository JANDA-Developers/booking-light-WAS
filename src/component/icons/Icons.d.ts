import React from 'react';
import { IIcons, IconConifgProps } from './declation';
import { JDatomExtentionSet } from '../../types/interface';
export interface IConProps
  extends React.HTMLAttributes<HTMLOrSVGElement>,
    JDatomExtentionSet {
  icon: IIcons;
  tooltipProp?: any;
}
declare const JDIcon: React.NamedExoticComponent<IConProps & IconConifgProps>;
export default JDIcon;
