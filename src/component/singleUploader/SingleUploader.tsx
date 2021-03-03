import { JDalign, JDbutton, JDlabel, JDatomClasses } from '@janda-com/front';
import { IButtonProps } from '@janda-com/front/dist/components/button/Button';
import { IInputTextCutsomProp } from '@janda-com/front/dist/components/InputText/InputText';
import { IDiv, JDatomExtentionSet } from '@janda-com/front/dist/types/interface';
import classNames from 'classnames';
import React, { useRef, useState } from 'react';
import { TUseSingleUpload } from '../../hook/useUpload';

export interface IProps extends Omit<IDiv, "onChange">, JDatomExtentionSet, TUseSingleUpload {
  label: string;
  inputProp?: IInputTextCutsomProp;
  buttonProps?: IButtonProps;
}


export const SingleUploader: React.FC<IProps> = ({
  label,
  name,
  onChange,
  buttonProps,
  className,
  inputProp,
  mb,
  mr,
}) => {
  const BtnProp = {
    ...buttonProps,
  };
  const uploaderRef = useRef<HTMLInputElement>(null);

  const handleBtnClick = () => {
    uploaderRef?.current?.click();
  };

  const classes = classNames('JDsingleUploader', className, {
    ...JDatomClasses({ mb, mr }),
  });

  return (
    <div className={classes}>
      {label && <JDlabel txt={label} />}
      <JDalign
        mb="normal"
        flex={{
          vCenter: true,
        }}
      >
        <input
          style={{
            position: 'absolute',
            opacity: 0,
            width: '1px',
            height: '1px',
          }}
          {...inputProp}
          className={'JDsingleUploader__input' + ' ' + inputProp?.className}
          type="file"
          onChange={onChange}
          ref={uploaderRef}
        />
        <JDbutton mode="border" mr mb="no" iconProp={{ icon: "camera" }} onClick={handleBtnClick} label="업로드" {...BtnProp} />
        <JDlabel txt={name || '선택된 파일없음'} mb="no"></JDlabel>
      </JDalign>
    </div>
  );
};

export default SingleUploader;

