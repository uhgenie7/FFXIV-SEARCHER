import React, { useEffect, useState } from "react";
import "./App.scss";
import axios from "axios";
import { Link, Route, Switch } from "react-router-dom";
// import Component
import Main from "./component/Main";
import Item from "./component/Item";
import Character from "./component/Character";
import Alert from "./component/Alert";
import Another from "./component/Another";
import Orchestrions from "./component/Orchestrions";
//import img
import github from "./img/contact/github.png";
import tistory from "./img/contact/tistory.png";

function App() {
  let [loading, setLoading] = useState(null);
  return (
    <div className="App">
      <div className="wrap">
        <header>
          <div className="header-inner">
            <div className="nav-container">
              <nav className="nav">
                <Link to="/">
                  <h1>FFXIV SEARCHER</h1>
                </Link>
                <ul>
                  <li>
                    <Link to="/character">캐릭터</Link>
                  </li>
                  <li>
                    <Link to="/item">아이템</Link>
                  </li>
                  <li>
                    <Link to="/orchestrions">오케스트리온</Link>
                  </li>
                  <li>
                    <Link to="/another">외부 사이트</Link>
                  </li>
                </ul>
                <ul>
                  <li>PROFILE</li>
                </ul>
              </nav>
            </div>
            <div className="form-container">
              <form action="#">
                <input type="text" className="header-search" />
              </form>
            </div>
          </div>
        </header>
        <Alert />
        <Switch>
          <Route exact path="/">
            <Main />
          </Route>
          <Route path="/character">
            <Character />
          </Route>
          <Route path="/another">
            <Another />
          </Route>
          <Route path="/item">
            <Item />
          </Route>
          <Route path="/orchestrions">
            <Orchestrions loading={loading} setLoading={setLoading} />
          </Route>
          <Route path="/:id"></Route>
        </Switch>
        <footer>
          <div className="inner">
            FINAL FANTASY XIV © 2010 - 2020 SQUARE ENIX CO., LTD. All Rights
            Reserved.
            <br />
            본 사이트는 Square Enix 및 Actoz Soft와 관련이 없습니다.
            <br />
            ALL FINAL FANTASY XIV CONTENT IS PROPERTY OF SQUARE ENIX CO., LTD
          </div>
          <div className="sns">
            <a href="https://github.com/uhj1993/lodestone" target="_blank">
              <img src={github} alt="githube" />
            </a>
            <a href="https://jineecode.tistory.com/" target="_blank">
              <img src={tistory} alt="tistory" />
            </a>
          </div>
        </footer>
      </div>
    </div>
  );
}

export default App;
