import React from 'react';
import './scss/App.scss';
import moment from 'moment'
import { JDbutton, JDavatar } from '@janda-com/front';
import { IIcons } from '@janda-com/front/dist/components/icons/declation';
import Header from './component/Common/Header'
import Sidebar from './component/Sidebar/Sidebar';
import MypageModal from './component/Mypage/MypageModal';

import ProductViewer from './component/ProductViewer/ProductViewer';

const Data_headVersion = "25.01.1";

const Data_headIcon:IIcons[] = [
  "help",
  "exclamation",
  "exclamation"
]

const Data_mypageModal = {
    userInfo:{
        image:"",
        name:"이서진",
        version:"JANDA Booking Light Version 이용 중"
    },
    service: [
      {
          icon:"menu",
          title:"환경설정"
      },
      { 
          icon:"menu",
          title:"고객센터"
      },
      { 
          icon:"menu",
          title:"마이페이지"
      },
      { 
          icon:"menu",
          title:"로그아웃"
      }
    ]
}

// onclick 추가 for sidebar, mypagemodal 

const datas = [
  {date:new Date(), item:{name:"item 1", count:1}},
  {date:new Date(), item:{name:"item 2", count:2}},
  {date:new Date(), item:{name:"item 3", count:3}},
  {date:new Date(), item:{name:"item 4", count:4}},
  {date:new Date(), item:{name:"item 5", count:5}},
  {date:new Date(), item:{name:"item 6", count:6}},
  {date:new Date(), item:{name:"item 7", count:7}},
];


const onDateChange = () => {
  
}

function App() {
  return (
    <div className="App">
      {/* <JDbutton thema="primary">Hello World</JDbutton>
      <JDavatar img="" size="large" onClick={()=>{}} />
      <JDavatar img="https://lh3.googleusercontent.com/proxy/Is5xuxI43H_nK13Qjz7DI9jlvxi6Agv1JPMVariy1nnOjuLVL21pdsb7eko-m962m9yAzaYLB8X622f8vtqMzj5dx4LQej51a9lUELYvbSyiLcqoB2Zak3R7Kkl3NM2441jyui-K" size="large" onClick={()=>{}} /> */}


      {/* <Header version={Data_headVersion} icons={Data_headIcon} />
      <Sidebar />
      <MypageModal modalInfo={Data_mypageModal} /> */}

      <ProductViewer date={new Date()} datas={datas} onDateChange={onDateChange} />
    </div>
  );
}

export default App;
