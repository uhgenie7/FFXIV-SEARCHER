import React, { useState, useEffect } from "react";
import { Link, Route, useHistory } from "react-router-dom";
import axios from "axios";
import Loading from "../component/Loading";
const Emote = ({ match }) => {
  let [emote, setEmote] = useState(null);
  useEffect(() => {
    // setLoading(false);
    axios
      .get(`https://ffxivcollect.com/api/emotes/${match.params.id}`)
      .then((res) => {
        console.log(res.data);
        setEmote(res.data);
        // setLoading(true);
        console.log(res.data.category.name);
      })
      .catch((e) => {
        console.log("실패");
      });
  }, []);

  if (emote) {
    const sources = emote.sources.map((item) => {
      return (
        <p>
          <strong>{item.type}</strong>: <span>{item.text}</span>
        </p>
      );
    });

    return (
      <main>
        <div className="emote-card">
          <div className="card-head">
            <div className="img-box">
              <img src={emote.icon} alt="#" />
            </div>
            <h3>{emote.id}</h3>
            <h3>{emote.name}</h3>
          </div>
          <div className="card-body lists">
            <div className="emote-info list">
              <ul>
                <li>
                  <span className="no">카테고리: </span>
                  {emote.category.name}
                </li>
                <li>
                  <span className="no">패치: </span>
                  {emote.patch}
                </li>
                <li>
                  <span className="no">커맨드: </span>
                  {emote.command}
                </li>
              </ul>
              <hr></hr>
              <h4>얻을 수 있는 방법</h4>
              {emote.sources[0] ? sources : <p>밝혀지지 않음</p>}
            </div>
          </div>
        </div>
      </main>
    );
  } else {
    return (
      <main>
        <Loading />
      </main>
    );
  }
};

export default Emote;
