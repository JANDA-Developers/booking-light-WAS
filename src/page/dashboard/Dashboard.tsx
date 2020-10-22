
import React, { useState } from "react";
import dayjs from "dayjs";
import { JDcard, JDcontainer, JDpageHeader, WindowSize } from "@janda-com/front";
import ProductViewer from "../../component/productView/ProductViewer";

interface IProps {
}

const Dashboard: React.FC<IProps> = () => {
  const [selectedDay, setselectedDay] = useState(new Date());


  const onDateChange = (newDay: Date) => {
    console.log(newDay);
    setselectedDay(newDay);
  }

  const datas = [
    {
      date: new Date(),
      product: [
        { name: "Room 1", count: 20, total: 100 },
        { name: "Room 2", count: 30, total: 100 },
        { name: "Room 3", count: 50, total: 100 }
      ]
    },
    {
      date: dayjs(new Date()).add(-1, "d").toDate(),
      product: [
        { name: "Room 1", count: 20, total: 100 },
        { name: "Room 2", count: 30, total: 100 },
        { name: "Room 3", count: 50, total: 100 }
      ]
    },
    {
      date: dayjs(new Date()).add(1, "d").toDate(),
      product: [
        { name: "Room 1", count: 20, total: 100 },
        { name: "Room 2", count: 30, total: 100 },
        { name: "Room 3", count: 50, total: 100 }
      ]
    }
  ];

  return (
    <div>
      <JDpageHeader desc={"판매 상품 현황을 확인할 수 있습니다"} title={"Booking Light Home"} />
      <JDcard className="dashboard">
        <ProductViewer
          listNum={2}
          date={selectedDay}
          datas={datas}
          onDateChange={(newDay) => { onDateChange(newDay) }}
        />
      </JDcard>
    </div>
  );
};

export default Dashboard;
