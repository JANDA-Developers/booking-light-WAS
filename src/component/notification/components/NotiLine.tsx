import React from 'react';
import { JDalign, JDbadge, JDtypho, } from "@janda-com/front"
import { JDicon } from '../../icons/Icons';
import dayjs from 'dayjs';
import { TElements } from '@janda-com/front/dist/types/interface';
import { FsystemNoti } from '../../../type/api';
import { getDateDiffText } from '../../../utils/getDateDiffText';

export interface INotiLineProp extends FsystemNoti {
}

export const NotiLine: React.FC<INotiLineProp> = ({ content, createdAt, type }) => {


  return (
    <JDalign
      flex={{
        vCenter: true,
        between: true,
      }}
      className="JDnotiLine"
    >
      <JDalign
        flex={{
          vCenter: true,
        }}
      >
        <JDicon mr="normal" tooltip={content} size="large" icon="bell" />
        <div>
          <JDbadge size="small" mb="tiny" thema="new">{type}</JDbadge>
          <JDtypho mr="normal" size="small" weight={600}>
            {content}
          </JDtypho>
        </div>
      </JDalign>
      <JDtypho size="tiny">{getDateDiffText(createdAt)}</JDtypho>
    </JDalign>
  );
};
