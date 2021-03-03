import React, { useEffect } from 'react';
import classNames from 'classnames';
import { IDiv } from '@janda-com/front/dist/types/interface';
import { isHaveNumber, isHaveScharacter, isLengthIn, JDalign, JDtypho, JDicon } from '@janda-com/front';

export type TCheck = {
  special: boolean;
  length: boolean;
  enAndNumber: boolean;
  checkedCount?: number;
};

export const password_condition = (
  special: any,
  length: any,
  enAndNumber: any
) => (
  <span>
    *{' '}
    <span className={special ? 'JDtextColor--point' : ''}>
      특수문자 1개이상
    </span>
    ,<span className={length ? 'JDtextColor--point' : ''}>7~15자리</span>,
    <span className={enAndNumber ? 'JDtextColor--point' : ''}>
      영문 숫자 조합
    </span>
  </span>
);

const Validation = (fillCount: number) => {
  if (fillCount === 0) {
    return '아주약함';
  }
  if (fillCount === 1) {
    return '약함';
  }
  if (fillCount === 2) {
    return '사용가능';
  }
  if (fillCount === 3) {
    return '안전';
  }

  throw Error('NoN PasswordChecker Validation');
};

export interface IProps extends IDiv {
  password: string;
  passwordCondition: TCheck;
  setPasswordCondition: React.Dispatch<React.SetStateAction<TCheck>>;
}

export const SecurityLevelViewer: React.FC<IProps> = ({
  password,
  passwordCondition,
  setPasswordCondition,
  ...props
}) => {
  let maxCount = 3;
  let fillCount = 0;

  if (passwordCondition.enAndNumber) fillCount++;
  if (passwordCondition.length) fillCount++;
  if (passwordCondition.special) fillCount++;

  useEffect(() => {
    setPasswordCondition({
      enAndNumber: isHaveNumber(password),
      length: isLengthIn(password, 15, 7),
      special: isHaveScharacter(password),
      checkedCount: fillCount,
    });
  }, [password]);

  const classes = classNames('securityBar', undefined, {
    'securityBar--red': fillCount === 1,
    'securityBar--orange': fillCount === 2,
    'securityBar--green': fillCount === 3,
  });

  let color: any = 'grey';
  if (fillCount === 1) {
    color = 'error';
  }
  if (fillCount === 2) {
    color = 'warn';
  }
  if (fillCount === 3) {
    color = 'positive';
  }

  return (
    <span {...props}>
      <div className={classes}>
        {Array(maxCount)
          .fill(null)
          .map((_, i) => (
            <span
              className={`securityBar__block ${i < fillCount &&
                'securityBar__block--fill'}`}
            ></span>
          ))}
      </div>
      <JDalign
        style={{
          justifyContent: 'flex-end',
        }}
        flex={{
          vCenter: true,
        }}
      >
        <JDtypho mr="small" color={color} size="small">
          {Validation(fillCount)}
        </JDtypho>
        <JDicon
          color="primary"
          icon="question"
          tooltip={
            password_condition(
              passwordCondition.special,
              passwordCondition.length,
              passwordCondition.enAndNumber
            ) as any
          }
        />
      </JDalign>
    </span>
  );
};

export default SecurityLevelViewer;
