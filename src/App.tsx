import React from 'react';
import './scss/App.scss';
import MypageModal from './component/Mypage/MypageModal';
import { HashRouter as Router, Route } from "react-router-dom";
import MainRouter from './MainRouter';


const Data_headVersion = "25.01.1";

const Data_headIcon = [
  "exclamation",
  "exclamation",
  "exclamation"
]


const Data_mypageModal = {
  userInfo: {
    image: "",
    name: "이서진",
    version: "JANDA Booking Light Version 이용 중"
  },
  service: [
    {
      icon: "menu",
      title: "환경설정"
    },
    {
      icon: "menu",
      title: "고객센터"
    },
    {
      icon: "menu",
      title: "마이페이지"
    },
    {
      icon: "menu",
      title: "로그아웃"
    }
  ]
}



// onclick 추가 for sidebar, mypagemodal 

function App() {
  return (
    <div className="App">
      <Router>
        <Route
          path={"/"}
          render={() => <MainRouter />}
        />
      </Router>
      <MypageModal modalInfo={Data_mypageModal} />
    </div>
  );
}

export default App;
