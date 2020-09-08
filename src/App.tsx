import React from 'react';
import './scss/App.scss';
import { JDbutton, JDavatar } from '@janda-com/front';

function App() {
  return (
    <div className="App">
      <JDbutton thema="primary">Hello World</JDbutton>
      <JDavatar img="" size="large" onClick={()=>{}} />
      <JDavatar img="https://lh3.googleusercontent.com/proxy/Is5xuxI43H_nK13Qjz7DI9jlvxi6Agv1JPMVariy1nnOjuLVL21pdsb7eko-m962m9yAzaYLB8X622f8vtqMzj5dx4LQej51a9lUELYvbSyiLcqoB2Zak3R7Kkl3NM2441jyui-K" size="large" onClick={()=>{}} />
    </div>
  );
}

export default App;
