import dayjs from "dayjs";
import { JDicon, JDbutton, JDtypho, JDalign } from "@janda-com/front";
import Product from "./components/Product";
import React, { useState } from "react";
import { Arrows } from "./components/Arrows";

export type TProduct = {
  name: string;
  count: number;
  total: number;
};

type TData = {
  date: Date;
  product: TProduct[];
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
    const nextDate = dayjs(date)
      .add(positive ? 1 : -1, "d")
      .toDate();
    onDateChange(nextDate);
  };

  const renderData = Array(7)
    .fill(null)
    .map((_, index) => {
      const Date = dayjs(date)
        .add(index - 3, "day")
        .toDate();
      const productDatas = datas.find((dayList) => {
        return dayjs(Date).isSame(dayList.date, "day")
      });

      return { Date, products: productDatas?.product || [] };
    });

  return (
    <div className="productViewer">
      <JDalign flex={{
        vCenter: true
      }} className="productViewer__nav">
        <JDtypho weight={600} size={"h6"}>
          {dayjs(date).format("YYYY.MM.DD")}
        </JDtypho>
        <Arrows onDateArrow={handleDateArrow} />
      </JDalign>
      <JDalign flex={{
        grow: true
      }} className="productViewer__ul">
        {renderData.map((productInfo, i) => {
          const { Date, products } = productInfo;
          const selectedDay = dayjs(date).isSame(productInfo.Date, "day");
          const dayInfo = dayjs(Date).format('YYYYMMDD');
          const dataLeng = products.length;
          const sliced = products.slice(0, 8);
          const expended = expend.find(index => index === i);
          let visibleData = expended ? productInfo.products : sliced

          return (
            <div className="productViewer__li" key={`status-${dayInfo}`}>
              <JDalign mb="large" flex={{
                vCenter: true,
                between: true
              }} className={`productViewer__date ${selectedDay && "selected"}`}>
                <span>{dayjs(productInfo.Date).format("DD")}</span>
                <span>{dayjs(productInfo.Date).format("ddd")}</span>
              </JDalign>
              <ul className="productViewer__productsWrap">
                {visibleData.map((product) => <Product key={`productViewer-${product.name}`} info={product} />)}
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
