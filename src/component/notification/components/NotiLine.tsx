import React from 'react';
import { JDalign, JDbadge, JDtypho, } from "@janda-com/front"
import { JDicon } from '../../icons/Icons';
import dayjs from 'dayjs';
import { TElements } from '@janda-com/front/dist/types/interface';
import { FsystemNoti } from '../../../type/api';

export interface INotiLineProp extends FsystemNoti {
}

export const NotiLine: React.FC<INotiLineProp> = ({ content, createdAt, type }) => {
  let dateText = dayjs(createdAt).format('YYYY-MM-DD');
  const timeDiff = Math.abs(dayjs(createdAt).diff(new Date(), 'h'));
  const dateDiff = Math.abs(dayjs(createdAt).diff(new Date(), 'd')) < 1;

  if (dateDiff) {
    dateText = `${timeDiff}시간 전`;
  }

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
      <JDtypho size="tiny">{dateText}</JDtypho>
    </JDalign>
  );
};
