import React, { useState, useEffect } from "react";
import { Link, Route, useHistory } from "react-router-dom";
import axios from "axios";

const Emotes = ({ posts, setPosts }) => {
  const history = useHistory();
  const allPage = posts.map((item, index) => {
    return (
      <tr
        key={index}
        onClick={() => {
          history.push(`/emotes/${item.id}`);
        }}
      >
        <th>
          <img src={item.icon} alt={item.name} />
        </th>
        <th>{item.name}</th>
        <th>{item.command}</th>
        <th>{item.category.name}</th>
        <th>{item.patch}</th>
      </tr>
    );
  });

  useEffect(() => {
    // setLoading(false);
    axios
      .get("https://ffxivcollect.com/api/emotes/")
      .then((res) => {
        setPosts(res.data.results);
        console.log(res);
        // setLoading(true);
      })
      .catch((e) => {
        console.log("실패");
      });
  }, []);

  return (
    <main>
      <h2 className="main-title">Emotes</h2>
      <div className="emote-posts">
        <table>
          <thead>
            <tr>
              <th></th>
              <th>감정표현</th>
              <th>커맨드</th>
              <th>카테고리</th>
              <th>패치버전</th>
            </tr>
          </thead>
          <tbody>{allPage}</tbody>
        </table>
      </div>
    </main>
  );
};

export default Emotes;
