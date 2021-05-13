import React, { useState } from "react";
import { Link, NavLink } from "react-router-dom";
import styled from "styled-components";

const Header = () => {
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
          <NavLink
            to="/character"
            className="nav-list"
            activeClassName="active"
          >
            캐릭터
          </NavLink>
        </li>
        <li>
          <NavLink to="/emotes" className="nav-list" activeClassName="active">
            감정표현
          </NavLink>
        </li>
        <li>
          <NavLink
            to="/orchestrions"
            className="nav-list"
            activeClassName="active"
          >
            오케스트리온
          </NavLink>
        </li>
        <li>
          <NavLink to="/another" className="nav-list" activeClassName="active">
            외부 사이트
          </NavLink>
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
            <NavLink
              to="/character"
              className="nav-list"
              activeClassName="active"
            >
              캐릭터
            </NavLink>
          </li>
          <li>
            <NavLink to="/emotes" className="nav-list" activeClassName="active">
              감정표현
            </NavLink>
          </li>
          <li>
            <NavLink
              to="/orchestrions"
              className="nav-list"
              activeClassName="active"
            >
              오케스트리온
            </NavLink>
          </li>
          <li>
            <NavLink
              to="/another"
              className="nav-list"
              activeClassName="active"
            >
              외부 사이트
            </NavLink>
          </li>
        </ul>
      </div>
    );
  }

  return (
    <header>
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
              setBar(true);
            }}
          >
            <i className="fas fa-bars"></i>
          </div>
        ) : null}

        <SideMenuBackground
          side={side}
          onClick={() => {
            setNav(false);
            setSide(false);
            setBar(false);
          }}
        >
          <SideNav nav={nav} />
        </SideMenuBackground>
      </nav>
    </header>
  );
};

export default Header;
