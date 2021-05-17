import React, { useState, useEffect } from "react";
import Loading from "../component/Loading";
import { Link, Route, useHistory } from "react-router-dom";
import axios from "axios";

const Orchestrions = ({ posts, setPosts, loading, setLoading }) => {
  let [tab, setTab] = useState(0);
  const history = useHistory();
  const allPage = posts.map((item, index) => {
    return (
      <tr
        key={index}
        onClick={() => {
          history.push(`/orchestrions/${item.id}`);
        }}
      >
        <th>
          <img src={item.icon} alt="악보" />
        </th>
        <th>{item.name}</th>
        <th>{item.description}</th>
        <th>{item.category.name}</th>
        <th>{item.patch}</th>
      </tr>
    );
  });

  const filterPage = posts
    .filter((item) => {
      if (item.category.id === tab) {
        return true;
      }
    })
    .map((item, index) => {
      return (
        <tr
          key={index}
          onClick={() => {
            history.push(`/orchestrions/${item.id}`);
          }}
        >
          <th>
            <img src={item.icon} alt="악보" />
          </th>
          <th>{item.name}</th>
          <th>{item.description}</th>
          <th>{item.category.name}</th>
          <th>{item.patch}</th>
        </tr>
      );
    });

  useEffect(() => {
    setLoading(false);
    axios
      .get("https://ffxivcollect.com/api/orchestrions/")
      .then((res) => {
        setPosts(res.data.results);
        setLoading(true);
      })
      .catch((e) => {
        console.log("실패");
      });
  }, []);

  return (
    <main>
      <h2 className="main-title">Orchestrions</h2>
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
      {loading ? null : <Loading />}
      <div className="orch-posts">
        <table>
          <thead>
            <tr>
              <th></th>
              <th>악보명</th>
              <th>획득처</th>
              <th>카테고리</th>
              <th>패치버전</th>
            </tr>
          </thead>
          <tbody>{tab === 0 ? allPage : filterPage}</tbody>
        </table>
      </div>
    </main>
  );
};

export default Orchestrions;
