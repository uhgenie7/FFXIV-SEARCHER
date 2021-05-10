import React, { useEffect, useState } from "react";
import axios from "axios";
import { Route, useHistory } from "react-router-dom";
// import Component
import Loading from "./Loading";
//import img
import sample from "../img/sample/avatar.jpg";

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
      <h2 className="main-title">Character</h2>
      <Route exact path="/character">
        <div className="search-container">
          <input
            placeholder="Name?"
            className="input-search"
            type="text"
            onChange={(e) => {
              searchChange(e.target.value);
            }}
            onKeyPress={(e) => {
              if (e.key === "Enter") {
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
                    console.log(error.response);
                  });
              }
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
                  console.log(error.response);
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
          {loading === false ? <Loading /> : null}
          <CharDetail
            charId={charId}
            charDetail={charDetail}
            charDetailChange={charDetailChange}
            setLoading={setLoading}
          />

          <CharDetailInfo
            charId={charId}
            charDetail={charDetail}
            charDetailChange={charDetailChange}
          />
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
  if (props.char === true) {
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
  useEffect(() => {
    props.setLoading(false);
    axios
      .get(`https://xivapi.com/character/${props.charId}`)
      .then((res) => {
        props.setLoading(true);
        props.charDetailChange(res.data.Character);
      })
      .catch((e) => {
        console.log("에러");
      });
  }, []);
  return <div></div>;
}

function CharDetailInfo(props) {
  return (
    <div className="char-detail">
      <div className="profile">
        <div className="avatar">
          <img
            className="avatar-img"
            src={props.charDetail.Avatar}
            alt={props.charDetail.Name}
          />
        </div>
        <h3>{props.charDetail.Name}</h3>
      </div>
      <div className="profile-info">
        <div className="portrait">
          <img
            width="100%"
            src={props.charDetail.Portrait}
            alt={props.charDetail.Name}
          />
        </div>
        <div>
          <ul className="profile-ul">
            <li className="profile-list">
              <ul>
                <li>
                  생일: <span>{props.charDetail.Nameday}</span>
                </li>
                <li>
                  서버 | 데이터 센터: <span>{props.charDetail.Server}</span> |
                  <span> {props.charDetail.DC}</span>
                </li>
                <li>
                  자유부대명: <span>{props.charDetail.FreeCompanyName}</span>
                </li>
                <li>
                  소개: <span>{props.charDetail.bio}</span>
                </li>
              </ul>
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
}

export default Character;
