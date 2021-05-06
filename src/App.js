import React, { useEffect, useState } from "react";
import "./App.css";
import axios from "axios";
import Character from "./component/Character";
import Alert from "./component/Alert";
import { Link, Route, Switch } from "react-router-dom";

function App() {
  return (
    <div className="App">
      <div className="wrap">
        <header>
          <div className="header-inner">
            <div className="nav-container">
              <nav className="nav">
                <h1>FFXIV</h1>
                <ul>
                  <li>
                    <Link to="/character">캐릭터</Link>
                  </li>
                  <li>
                    <Link to="/free-company">자유부대</Link>
                  </li>
                  <li>
                    <Link to="/item">아이템</Link>
                  </li>
                  <li>
                    <Link to="/item">ABOUT</Link>
                  </li>
                </ul>
                <ul>
                  <li>profile</li>
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
            <main>
              <div className="notice">
                <h2>공지사항</h2>
              </div>
              <div className="board">
                <h2>게시판</h2>
              </div>
              <div className="board">
                <h2>게시판2</h2>
              </div>
            </main>
            <aside>
              <div className="board">
                <h2>게시판 어사이드</h2>
              </div>
              <div className="board">
                <h2>게시판 어사이드2</h2>
              </div>
            </aside>
          </Route>
          <Route path="/character">
            <Character />
          </Route>
          <Route path="/free-company"></Route>
          <Route path="/item"></Route>
          <Route path="/about"></Route>
          <Route path="/:id"></Route>
        </Switch>
        <footer>
          <div className="inner">
            FINAL FANTASY XIV © 2010 - 2020 SQUARE ENIX CO., LTD. All Rights
            Reserved.
            <br />
            Published in Korea by ACTOZ SOFT CO., LTD. <br />본 사이트는 Square
            Enix 및 Actoz Soft와 관련이 없습니다.
            <br />
            ALL FINAL FANTASY XIV CONTENT IS PROPERTY OF SQUARE ENIX CO., LTD
          </div>
        </footer>
      </div>
    </div>
  );
}

export default App;
