import React, { useEffect, useState } from "react";
import axios from "axios";
import Loading from "./Loading";
import Orch from "./Orch";
import Pagination from "./Pagination";

function Orchestrions(props) {
  let [posts, setPosts] = useState([]);
  let [currentPage, setCurrentPage] = useState(1);
  let [postsPerPage, setPostPerPage] = useState(10);
  let [tab, setTab] = useState(0);

  useEffect(() => {
    props.setLoading(false);
    axios
      .get("https://ffxivcollect.com/api/orchestrions/")
      .then((res) => {
        setPosts(res.data.results);
        props.setLoading(true);
      })
      .catch((e) => {
        console.log("실패");
      });
  }, []);
  // pagination 변수
  const indexOfLast = currentPage * postsPerPage;
  const indexOfFirst = indexOfLast - postsPerPage;
  function currentPosts(tmp) {
    let currentPosts = 0;
    currentPosts = tmp.slice(indexOfFirst, indexOfLast);
    return currentPosts;
  }
  console.log(posts);
  return (
    <main className="orch-main">
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
      <div className="orch-posts">
        <Orch
          // posts={currentPosts(posts)}
          posts={posts}
          loading={props.loading}
          setLoading={props.setLoading}
          tab={tab}
        />
        {/* <Pagination
          postsPerPage={postsPerPage}
          totalPosts={posts.length}
          paginate={setCurrentPage}
        /> */}
      </div>
    </main>
  );
}

export default Orchestrions;
