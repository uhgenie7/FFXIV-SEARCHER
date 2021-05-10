import React, { useState } from "react";
import Orchestrion from "./Orchestrion";

function Orchestrions(props) {
  let [tab, setTab] = useState(0);
  return (
    <main className="orch-main">
      <div className="orch-btns">
        <button
          className="orch-btn"
          onClick={() => {
            setTab(0);
          }}
        >
          전체
        </button>
        <button
          className="orch-btn"
          onClick={() => {
            setTab(2);
          }}
        >
          지역 1
        </button>
        <button
          className="orch-btn"
          onClick={() => {
            setTab(9);
          }}
        >
          지역 2
        </button>
        <button
          className="orch-btn"
          onClick={() => {
            setTab(3);
          }}
        >
          던전
        </button>
        <button
          className="orch-btn"
          onClick={() => {
            setTab(4);
          }}
        >
          토벌전
        </button>
        <button
          className="orch-btn"
          onClick={() => {
            setTab(5);
          }}
        >
          레이드 1
        </button>
        <button
          className="orch-btn"
          onClick={() => {
            setTab(10);
          }}
        >
          레이드 2
        </button>
        <button
          className="orch-btn"
          onClick={() => {
            setTab(11);
          }}
        >
          주거별
        </button>
        <button
          className="orch-btn"
          onClick={() => {
            setTab(6);
          }}
        >
          기타
        </button>
        <button
          className="orch-btn"
          onClick={() => {
            setTab(7);
          }}
        >
          시즌
        </button>
        <button
          className="orch-btn"
          onClick={() => {
            setTab(8);
          }}
        >
          스토어
        </button>
      </div>
      <div className="orch-posts">
        <Orchestrion
          posts={props.posts}
          loading={props.loading}
          setLoading={props.setLoading}
          tab={tab}
          setPosts={props.setPosts}
        />
      </div>
    </main>
  );
}

export default Orchestrions;
