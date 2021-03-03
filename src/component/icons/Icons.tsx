/* eslint-disable max-len */
import React from 'react';
import classNames from 'classnames';
import { JDatomExtentionSet } from '@janda-com/front/dist/types/interface';
import { IconSize, JDatomClasses, JDColor, s4 } from '@janda-com/front';
import { JDbadge, JDtooltip } from '@janda-com/front';
import { IconConifgProps, IConOrigin, IIcons } from './declation';

// mixin 파일의
const iconSizeClass = (boxName: string, size?: IconSize | null) => {
  let obj: any = {};
  obj[`${boxName}--superTiny`] = size === 'superTiny';
  obj[`${boxName}--tiny`] = size === 'tiny';
  obj[`${boxName}--small`] = size === 'small';
  obj[`${boxName}--normal`] = size === 'normal';
  obj[`${boxName}--large`] = size === 'large';
  obj[`${boxName}--huge`] = size === 'huge';
  obj[`${boxName}--largest`] = size === 'largest';
  obj[`${boxName}--largest2`] = size === 'largest2';

  return obj;
};

const textColorClass = (color?: JDColor | null) => {
  let obj: any = {};

  if (!color) {
    return {
      'JDtextColor--default': true,
    };
  }
  obj[`JDtextColor--primary`] = color === 'primary';
  obj[`JDtextColor--point`] = color === 'point';
  obj[`JDtextColor--positive`] = color === 'positive';
  obj[`JDtextColor--warn`] = color === 'warn';
  obj[`JDtextColor--grey1`] = color === 'grey1';
  obj[`JDtextColor--grey2`] = color === 'grey2';
  obj[`JDtextColor--grey3`] = color === 'grey3';
  obj[`JDtextColor--grey4`] = color === 'grey4';
  obj[`JDtextColor--grey5`] = color === 'grey5';
  obj[`JDtextColor--darkPrimary`] = color === 'darkPrimary';
  obj[`JDtextColor--error`] = color === 'error';
  obj[`JDtextColor--new`] = color === 'new';
  obj[`JDtextColor--black`] = color === 'black';
  obj[`JDtextColor--white`] = color === 'white';
  obj[`JDtextColor--blue`] = color === 'blue';
  obj[`JDtextColor--third`] = color === 'third';
  obj[`JDtextColor--lightPrimary`] = color === 'lightPrimary';
  return obj;
};


export interface IConProps
  extends React.HTMLAttributes<HTMLOrSVGElement>,
  JDatomExtentionSet {
  /** 아이콘 명세*/
  icon: IIcons;
  /** X*/
  tooltipProp?: any;
  edit?: boolean;
  path?: string;
}

export type ICONPROP = IConProps & IconConifgProps;

export const JDicon: React.FC<ICONPROP> = ({
  label,
  mode,
  icon,
  edit,
  onClick,
  size = undefined,
  tooltip,
  color,
  labelSize,
  className,
  selected,
  badge,
  tooltipProp,
  hover,
  mb,
  mr,
  ...props
}) => {
  const wrapClasses = classNames('iconWrapper', className, {
    JDhover: hover,
    'iconWrapper--circle': mode === "circle",
    'iconWrapper--circleBorder': mode === "circleBorder",
    'iconWrapper--circleShdow': mode === "circleShdow",
    ...JDatomClasses({ hover, mb, mr }),
  });

  const classes = classNames('JDicon', undefined, {
    JDicon__svg: true,
    'JDicon--edit': edit,
    'JDicon__svg--selected': selected,
    ...textColorClass(color),
    ...iconSizeClass('JDicon', size),
  });

  const newId = s4();

  if (!IConOrigin[icon]) {
    console.error(`icon ${icon} is not exist on IConOrigin`);
    return <span />;
  }

  return (
    <span
      {...tooltipProp}
      onClick={onClick}
      data-tip={tooltip ? true : false}
      data-for={tooltip && `btnTooltip${newId}`}
      className={wrapClasses}
    >
      {IConOrigin[icon]({
        className: classes,
        ...props,
      })}
      {tooltip && (
        <JDtooltip
          wrapper="div"
          type="dark"
          effect="solid"
          id={`btnTooltip${newId}`}
        >
          <span
            style={{
              whiteSpace: 'nowrap',
            }}
          >
            {tooltip}
          </span>
        </JDtooltip>
      )}
      {badge && (
        <JDbadge className="JDicon__badge" size="small" thema="error" round>
          {badge}
        </JDbadge>
      )}
      {label && (
        <span
          className={`Icon__label ${labelSize === 'large' &&
            'Icon__label--large'}`}
        >
          {label}
        </span>
      )}
    </span>
  );
};

const JDIcon = React.memo(JDicon);
export default JDIcon;

