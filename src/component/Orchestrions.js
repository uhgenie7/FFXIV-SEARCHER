import React, { useEffect, useState } from "react";
import axios from "axios";
import Loading from "./Loading";
import Posts from "./Posts";
import Pagination from "./Pagination";

function Orchestrions(props) {
  let [posts, setPosts] = useState([]);
  let [currentPage, setCurrentPage] = useState(1);
  let [postsPerPage, setPostPerPage] = useState(10);

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
    <main className="och-main">
      <h2 className="main-title">Orchestrions</h2>
      <div className="btns">
        <button>ALL</button>
        <button>지역</button>
        <button>던전</button>
      </div>
      <div className="oche-posts">
        <Posts
          posts={currentPosts(posts)}
          loading={props.loading}
          setLoading={props.setLoading}
          // posts={posts}
        />
        <Pagination
          postsPerPage={postsPerPage}
          totalPosts={posts.length}
          paginate={setCurrentPage}
        />
      </div>
    </main>
  );
}

export default Orchestrions;
