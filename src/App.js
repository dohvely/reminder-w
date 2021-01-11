import React from 'react'
import { HashRouter, Route } from 'react-router-dom'
import MainBoard from './views/MainBoard'
import ReminderDetail from './views/ReminderDetail'
import './App.css';

function App() {
  return (
    <HashRouter>
      {/* 메인보드 화면 */}
      <Route path="/" exact component={MainBoard}></Route>
      {/* 미리알림 상세 화면 */}
      <Route path="/detail" exact={true} component={ReminderDetail}></Route>
    </HashRouter>
  )
  /* return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.js</code> and save to reload.
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
      </header>
    </div>
  ); */
}

export default App;
