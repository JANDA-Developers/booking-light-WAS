import React, { useContext, useEffect } from 'react';
import { JDpreloader, InputText, JDtabs, Tab, TabList, TabPanel, JDdropDown, TUseInput, useDropDown, TOffset, JDtypho, Flex, JDalign } from "@janda-com/front"
import { JDicon } from '../icons/Icons';
import { NotiLine, INotiLineProp } from './components/NotiLine';
import { IconConifgProps } from '../icons/declation';
import { useSystemNotiList, useSystemNotiRead } from '../../hook/useSystemNoti';
import AppContext from '../../context';
import { Empty } from '../../atom/Empty';
import { isEmpty } from 'lodash';
import { useHistory } from 'react-router';
import { Paths } from '../../MainRouter';

export type TtabData = {
  name: string;
  data: INotiLineProp[];
};

export interface INotiProp {
  iconProp?: IconConifgProps;
  notiLines?: INotiLineProp[];
  loading?: boolean;
  notiIds?: string[]
  searchHook?: TUseInput;
  offset?: TOffset;
  tabs?: TtabData[];
  unReadCount?: number;
}

export const Noti: React.FC<INotiProp> = ({
  iconProp,
  notiLines,
  searchHook,
  notiIds = [],
  tabs,
  loading,
  offset,
  unReadCount,
}) => {
  const { me } = useContext(AppContext);
  const { items } = useSystemNotiList({}, {
    pollInterval: 600000, variables: {
      pagingInput: {
        pageIndex: 0,
        pageItemCount: 99
      },
      filter: {
        _id__in: me?.unReadSystemNoties || []
      }
    }
  })
  const [notiRead] = useSystemNotiRead()
  const dropDown = useDropDown();

  const history = useHistory();

  const toSystemNotiHistory = () => {
    history.push(Paths.notiHistory)
  }

  useEffect(() => {
    if (dropDown.isOpen) {
      notiRead({
        variables: {
          ids: notiIds
        }
      })
    }

  }, [dropDown.isOpen])

  return (
    <span
      className="JDnoti"
      style={{
        position: 'relative',
      }}
    >
      <JDicon
        badge={unReadCount ? `${unReadCount}` : undefined}
        hover
        icon="bell2"
        {...iconProp}
        onClick={e => {
          e.cancelable = true;
          e.persist();
          e.stopPropagation();
          dropDown.open(
            undefined,
            offset || {
              top: '1.5rem',
              right: 0,
            }
          );
        }}
      />
      <JDdropDown
        closeOnWindowClick
        className="JDnoti__dropBox"
        position={'absolute'}
        head={{
          title: '알림',
        }}
        {...dropDown}
      >
        <>
          <JDpreloader
            center
            style={{
              padding: '1rem',
            }}
            loading={loading}
            size="large"
          />
          {tabs ? (
            <JDtabs size="small">
              <TabList className="JDnoti__tabListWrap">
                {tabs.map((t, i) => (
                  <Tab key={`NotiTab${i}`}>{t.name}</Tab>
                ))}
              </TabList>
              {searchHook && (
                <InputText
                  {...searchHook}
                  wrapClassName="JDnoti__search"
                  mb="no"
                  mr="no"
                  Size="small"
                  icon="search2"
                />
              )}
              {tabs.map((tab, i) => (
                <TabPanel key={`NotiTabPanel${i}`}>
                  <div className="JDnoti__ul">
                    {tab.data.map((noti, i) => (
                      <NotiLine key={`NotiLi${i}`} {...noti} />
                    ))}
                  </div>
                </TabPanel>
              ))}
            </JDtabs>
          ) : (
            items?.map((noti, i) => (
              <NotiLine key={noti._id || `NotiLi${i}`} {...noti} />
            ))
          )}
        </>
        {isEmpty(items) && <JDtypho mb="large" color="grey2" text="center" >새로운 알림이 존재하지 않습니다.</JDtypho>}

        <JDtypho onClick={toSystemNotiHistory} hover color="grey2" size="small">자세히보기</JDtypho>
      </JDdropDown>
    </span>
  );
};

export default Noti;