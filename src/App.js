import React, { useEffect, useState } from "react";
import "./App.scss";
import { Link, Route, Switch } from "react-router-dom";
import styled from "styled-components";
// import Component
import Main from "./component/Main";
import Character from "./component/Character";
import Alert from "./component/Alert";
import Another from "./component/Another";
import OrchIndex from "./component/Orchestrions/OrchIndex";
import EmotesIndex from "./component/Emotes/EmotesIndex";
import NotFound from "./component/NotFound";
//import img
import github from "./img/contact/github.png";
import tistory from "./img/contact/tistory.png";

function App() {
  let [loading, setLoading] = useState(null);
  let [alert, setAlert] = useState(false);
  let [nav, setNav] = useState(false);
  let [bar, setBar] = useState(false);
  let [side, setSide] = useState(false);
  const SideMenuBackground = styled.div`
    display: ${(props) => (props.side ? "block" : "none")};
  `;

  function Nav() {
    return (
      <ul className="navigation">
        <li>
          <Link to="/character">캐릭터</Link>
        </li>
        <li>
          <Link to="/emotes">감정표현</Link>
        </li>
        <li>
          <Link to="/orchestrions">오케스트리온</Link>
        </li>
        <li>
          <Link to="/another">외부 사이트</Link>
        </li>
      </ul>
    );
  }

  function SideNav() {
    return (
      <div className={`nav-side ${side ? "open" : ""}`}>
        <i
          class="fas fa-times"
          onClick={() => {
            setNav(false);
            setSide(false);
          }}
        ></i>
        <ul>
          <li>
            <Link to="/character">캐릭터</Link>
          </li>
          <li>
            <Link to="/emotes">감정표현</Link>
          </li>
          <li>
            <Link to="/orchestrions">오케스트리온</Link>
          </li>
          <li>
            <Link to="/another">외부 사이트</Link>
          </li>
        </ul>
      </div>
    );
  }
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
                {nav === false ? <Nav /> : null}
                {bar === false ? (
                  <div
                    className="nav-toggle"
                    onClick={() => {
                      setNav(true);
                      setSide(true);
                    }}
                  >
                    <i className="fas fa-bars"></i>
                  </div>
                ) : null}
              </nav>
              <SideMenuBackground
                side={side}
                onClick={() => {
                  setNav(false);
                  setSide(false);
                }}
              >
                <SideNav nav={nav} />
              </SideMenuBackground>
            </div>
          </div>
        </header>
        {alert === false ? <Alert setAlert={setAlert} /> : null}
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
          <Route path="/emotes">
            <EmotesIndex loading={loading} setLoading={setLoading} />
          </Route>
          <Route path="/orchestrions">
            <OrchIndex loading={loading} setLoading={setLoading} />
          </Route>
          <Route path="/:id">
            <NotFound />
          </Route>
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
            <a
              href="https://github.com/uhj1993/lodestone"
              target="_blank"
              rel="noopener noreferrer"
            >
              <img src={github} alt="githube" />
            </a>
            <a
              href="https://jineecode.tistory.com/"
              target="_blank"
              rel="noopener noreferrer"
            >
              <img src={tistory} alt="tistory" />
            </a>
          </div>
        </footer>
      </div>
    </div>
  );
}

export default App;
