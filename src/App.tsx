import React from 'react';
import './scss/App.scss';
import { HashRouter as Router, Route } from "react-router-dom";
import MainRouter from './MainRouter';

function App() {
  return (
    <div className="App">
      <Router>
        <Route
          path={"/"}
          render={() => <MainRouter />}
        />
      </Router>
    </div>
  );
}

export default App;
