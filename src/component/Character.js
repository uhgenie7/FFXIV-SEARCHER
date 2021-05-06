import React, { useEffect, useState } from "react";
import axios from "axios";
import { Route, Link, useHistory } from "react-router-dom";
import sample from "../img/sample/avatar.jpg";
import load from "../img/sample/loading.gif";

function Character() {
  let history = useHistory();
  let [search, searchChange] = useState("");
  let [result, resultChange] = useState([]);
  let [char, charChange] = useState(false);
  let [loading, setLoading] = useState(null);
  let [charId, charIdChange] = useState();
  let [charDetail, charDetailChange] = useState([]);
  return (
    <main className="char-main">
      <div className="char-title">Character</div>
      <Route exact path="/character">
        <div className="search-container">
          <input
            placeholder="Name?"
            className="input-search"
            type="text"
            onChange={(e) => {
              searchChange(e.target.value);
            }}
          />
          <button
            className="input-button"
            onClick={() => {
              setLoading(false);
              axios
                .get(`https://xivapi.com/character/search?name=${search}`)
                .then((res) => {
                  setLoading(true);
                  let data = res.data.Results;
                  resultChange(data);
                  charChange(true);
                })
                .catch((error) => {
                  console.log("실패");
                });
            }}
          >
            검색
          </button>
        </div>

        {loading === false ? <Loading /> : null}
        <CharList
          result={result}
          char={char}
          resultChange={resultChange}
          charIdChange={charIdChange}
        />
      </Route>
      <Route path="/character/:id">
        <div className="history-btn">
          <button
            onClick={() => {
              history.goBack();
            }}
            className="input-button"
          >
            뒤로가기
          </button>
        </div>
        <div>
          <CharDetail charId={charId} />
        </div>
      </Route>
    </main>
  );
}

// component
function CharList(props) {
  let history = useHistory();
  let resultArray = props.result.map((item, index) => {
    return (
      <li
        key={index}
        className="char-list"
        onClick={() => {
          history.push("/character/" + props.result[index].ID);
          props.charIdChange(props.result[index].ID);
        }}
      >
        <div className="avatar">
          <img
            className="avatar-img"
            src={props.result[index].Avatar}
            alt={props.result[index].Name}
          />
        </div>
        <ul>
          <li>닉네임: {props.result[index].Name} </li>
          <li>언어: {props.result[index].Lang} </li>
          <li className="char-server">서버: {props.result[index].Server} </li>
        </ul>
      </li>
    );
  });
  console.log(props.result.slice(0, 5));
  if (props.char == true) {
    return (
      <div>
        <ul className="char-ul">{resultArray}</ul>
      </div>
    );
  } else {
    return (
      <ul className="char-ul">
        <li className="char-list">
          <div className="avatar">
            <img className="avatar-img" src={sample} alt="avatar-img" />
          </div>
          <ul>
            <li>EX) 닉네임: </li>
            <li>EX) 언어: </li>
            <li className="char-server">EX) 서버: </li>
          </ul>
        </li>
      </ul>
    );
  }
}

function CharDetail(props) {
  console.log(props);
  useEffect(() => {
    axios
      .get(`https://xivapi.com/character/${props.charId}`)
      .then((res) => {
        console.log(res.data);
      })
      .catch((e) => {
        console.log("에러");
      });
  }, []);
  return <div></div>;
}

function CharDetailInfo() {
  return (
    <div>
      <div className="tabBtn">
        <button>프로필</button>
        <button>클래스</button>
        <button>꼬마친구</button>
        <button>탈 것</button>
      </div>
      <div className="profile">
        <ul className="profile-ul">
          <li className="profile-list">
            <h3>프로필</h3>
            <div className="avater">
              <img src="#" alt="#" />
            </div>
            <ul>
              <li>
                닉네임: <span></span>
              </li>
              <li>
                생일: <span></span>
              </li>
              <li className="char-server">
                서버|데이터 센터: <span></span>|<span></span>
              </li>
              <li>
                자유부대명: <span></span>
              </li>
              <li>
                소개: <span></span>
              </li>
            </ul>
          </li>
        </ul>
      </div>
      <div className="portrait">
        <img src="#" alt="#" />
      </div>
    </div>
  );
}

function Loading() {
  return (
    <div className="loading">
      <img className="avatar-img" src={load} alt="avatar-img" width="25px" />
    </div>
  );
}

export default Character;
