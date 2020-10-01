import moment from "moment";
import { JDicon, JDbutton, JDtypho, JDalign } from "@janda-com/front";
import Item from "./components/Item";
import React, { useState } from "react";
import { Arrows } from "./components/Arrows";

export type TItem = {
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

const ProductViewer: React.FC<IProps> = ({ listNum, date, datas, onDateChange }) => {
  const [expend, setExpend] = useState([]);
  const handleDateArrow = (positive: boolean) => {
    // toDate 메서드를통해서 momnet객체에서 Date 객체로 변환가능
    const nextDate = moment(date)
      .add(positive ? 1 : -1, "days")
      .toDate();
    onDateChange(nextDate);
  };

  const renderData = Array(7)
    .fill(null)
    .map((_, index) => {
      const Date = moment(date)
        .add(index - 3, "day")
        .toDate();
      const itemDatas = datas.find((dayList) => {
        return moment(Date).isSame(dayList.date, "day")
      });

      return { Date, items: itemDatas?.item || [] };
    });

  return (
    <div className="productViewer">
      <JDalign flex={{
        vCenter: true
      }} className="productViewer__nav">
        <JDtypho weight={600} size={"h6"}>
          {moment(date).format("YYYY.MM.DD")}
        </JDtypho>
        <Arrows onDateArrow={handleDateArrow} />
      </JDalign>
      <JDalign flex={{
        grow: true
      }} className="productViewer__ul">
        {renderData.map((itemInfo, i) => {
          const { Date, items } = itemInfo;
          const selectedDay = moment(date).isSame(itemInfo.Date, "day");
          const dayInfo = moment(Date).format('YYYYMMDD');
          const dataLeng = items.length;
          const sliced = items.slice(0, 8);
          const expended = expend.find(index => index === i);
          let visibleData = expended ? itemInfo.items : sliced

          return (
            <div className="productViewer__li" key={`status-${dayInfo}`}>
              <JDalign mb="large" flex={{
                vCenter: true,
                between: true
              }} className={`productViewer__date ${selectedDay && "selected"}`}>
                <span>{moment(itemInfo.Date).format("DD")}</span>
                <span>{moment(itemInfo.Date).format("ddd")}</span>
              </JDalign>
              <ul className="productViewer__itemsWrap">
                {visibleData.map((item) => <Item key={`productViewer-${item.name}`} info={item} />)}
                {(dataLeng > 8 && !expended) && <JDbutton style={{
                  width: "100%"
                }} size="small" mode={'flat'} thema="primary" label={'더보기'} />}
              </ul>
            </div>
          );
        })}
      </JDalign>
    </div>
  );
};

export default ProductViewer;
