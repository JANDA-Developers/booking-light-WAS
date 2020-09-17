
import React, { useState } from "react";
import { JDcontainer, WindowSize } from "@janda-com/front";
import ProductViewer from "../../component/ProductViewer/ProductViewer";
import "../../scss/Dashboard/Dashboard.scss";

interface IProps {
  title: string;
  subtitle: string;
}

const Dashboard: React.FC<IProps> = ({ title, subtitle }) => {
  const [selectedDay, setselectedDay] = useState(new Date());
  const yesterday = new Date();
  yesterday.setDate(15)

  const onDateChange = (direction: string) => {

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
      date: yesterday,
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
        <h1 className="dashboard__title">{title}</h1>
        <h2 className="dashboard__subtitle">{subtitle}</h2>
        <JDcontainer>
          <ProductViewer
            listNum={2}
            date={selectedDay}
            datas={datas}
            onDateChange={() => { }}
          />
        </JDcontainer>
      </div>
    </JDcontainer>
  );
};

export default Dashboard;
