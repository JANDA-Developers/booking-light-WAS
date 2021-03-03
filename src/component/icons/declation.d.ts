import { HTMLAttributes } from 'react';
import { JDColor, IconSize } from '../../types/enum';
import { TElements } from '../../types/interface';
export declare type IIcons =
  | 'menu'
  | 'magnifier'
  | 'addCircle'
  | 'jdR'
  | 'jdT'
  | 'jdS'
  | 'jdG'
  | 'historyWatch'
  | 'emptyStart'
  | 'barGraph'
  | 'reservation'
  | 'won'
  | 'gear'
  | 'location'
  | 'arrowUp'
  | 'speechBubble'
  | 'recipt'
  | 'gearBox'
  | 'houseGear'
  | 'speechBubble2'
  | 'triWarn'
  | 'diffuser'
  | 'exclamation'
  | 'camera'
  | 'chair'
  | 'vim'
  | 'board'
  | 'wifi'
  | 'shortLeft'
  | 'shortRight'
  | 'arrowRight'
  | 'arrowDown'
  | 'bell'
  | 'share'
  | 'trashCan'
  | 'close'
  | 'fillStar'
  | 'plus'
  | 'search'
  | 'arrowBack'
  | 'kakaoTalk'
  | 'email'
  | 'list'
  | 'doubleBlock'
  | 'threeBlock'
  | 'question'
  | 'point'
  | 'box'
  | 'circleRightArrow'
  | 'help'
  | 'photoFile'
  | 'file'
  | 'naver';
declare type TConOrigin = {
  [key: string]: (prop: HTMLAttributes<SVGElement>) => any;
};
export declare const IConOrigin: TConOrigin;
export interface IconConifgProps {
  viwBox?: string;
  label?: string;
  labelSize?: 'large' | 'small';
  size?: IconSize;
  hover?: boolean;
  color?: JDColor;
  tooltip?: string;
  selected?: boolean;
  dots?: TElements;
}
export {};
