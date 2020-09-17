import React from "react";
import moment from "moment";
import { JDicon, JDbutton } from "@janda-com/front";

type TItem = {
  name: string;
  count: number;
  total: number;
};

type TData = {
  date: Date;
  item: TItem[];
};

interface IProps {
  listNum: number
  date: Date;
  datas: TData[];
  onDateChange: (date: Date) => void;
}

interface ITest {
  name: string;
  count: number;
  total: number;
}

const ProductViewer: React.FC<IProps> = ({ listNum, date, datas, onDateChange }) => {

  const handleDateArrow = (positive: boolean) => {
    // toDate 메서드를통해서 momnet객체에서 Date 객체로 변환가능
    const nextDate = moment(date)
      .add(positive ? 1 : -1)
      .toDate();
    onDateChange(nextDate);

  };

  const renderData = Array(7)
    .fill(null)
    .map((_, index) => {
      const Date = moment(date)
        .add(index - 3, "day")
        .toDate();
      const itemDatas = datas.filter((dayList) => {
        return moment(Date).isSame(dayList.date, "day")
      });
      const items = itemDatas.map((i) => i.item);

      return { Date, items };
    });

  return (
    <div className="dashboard__saleStatus">
      <div className="statusNav">
        <span className="statusNav__date">
          {moment(date).format("YYYY.MM.DD")}
        </span>
        <span className="statusNav__arrow">
          <JDicon
            icon="shortLeft"
            className="statusPrev"
            onClick={() => {
              handleDateArrow(false);
            }}
          />
          <JDicon
            icon="shortRight"
            className="statusNext"
            onClick={() => {
              handleDateArrow(true);
            }}
          />
        </span>
      </div>
      <div className="statusListWrap">
        {renderData.map((itemInfo) => {
          let selectedDay = moment(date).isSame(itemInfo.Date, "day");
          let dayInfo = moment(itemInfo.Date).format('YYYYMMDD');
          let dataLeng = itemInfo.items.length;
          return (
            <div className="statusList" key={`status-${dayInfo}`}>
              <div className={`statusList__date ${selectedDay && "selected"}`}>
                <span>{moment(itemInfo.Date).format("DD")}</span>
                <span>{moment(itemInfo.Date).format("ddd")}</span>
              </div>
              <ul className="statusList__itemBlock">
                {itemInfo.items.map((item) => {
                  return item.slice(0, listNum).map((infoList) => {
                    return (
                      <li className="items selected" key={`statusList-${infoList.name}`}>
                        <div className="items__deco"></div>
                        <div className="items__info">
                          <div className="items__name">
                            {infoList.name}
                          </div>
                          <div className="items__count">
                            <span className="items__booked">
                              {infoList.count}
                            </span>
                            <span> / </span>
                            <span className="items__total">
                              {infoList.total}
                            </span>
                          </div>
                        </div>
                      </li>
                    );
                  })
                })}
                {
                  dataLeng != 0 ? <li>
                    <a href="" className="statusMore">더보기</a></li> : false
                }
              </ul>
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default ProductViewer;
