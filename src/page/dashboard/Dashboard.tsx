
import React, { useState } from "react";
import moment from "moment";
import { JDcontainer, JDpageHeader, WindowSize } from "@janda-com/front";
import ProductViewer from "../../component/ProductViewer/ProductViewer";
import "../../scss/Dashboard/Dashboard.scss";

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
      item: [
        { name: "Room 1", count: 20, total: 100 },
        { name: "Room 2", count: 30, total: 100 },
        { name: "Room 3", count: 50, total: 100 }
      ]
    },
    {
      date: moment(new Date()).add(-1, "days").toDate(),
      item: [
        { name: "Room 1", count: 20, total: 100 },
        { name: "Room 2", count: 30, total: 100 },
        { name: "Room 3", count: 50, total: 100 }
      ]
    },
    {
      date: moment(new Date()).add(1, "days").toDate(),
      item: [
        { name: "Room 1", count: 20, total: 100 },
        { name: "Room 2", count: 30, total: 100 },
        { name: "Room 3", count: 50, total: 100 }
      ]
    }
  ];

  return (
    <JDcontainer size={WindowSize.full}>

      <div className="dashboard">
        <JDpageHeader displayIcon={false} desc={"판매 상품 현황을 확인할 수 있습니다"} title={"Booking Light Home"} />
        <JDcontainer>
          <ProductViewer
            listNum={2}
            date={selectedDay}
            datas={datas}
            onDateChange={(newDay) => { onDateChange(newDay) }}
          />
        </JDcontainer>
      </div>
    </JDcontainer>
  );
};

export default Dashboard;
