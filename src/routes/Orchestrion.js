import React, { useState, useEffect } from "react";
import { Link, Route, useHistory } from "react-router-dom";
import axios from "axios";
import Loading from "../component/Loading";
const Emote = ({ match }) => {
  let [orch, setOrch] = useState(null);
  useEffect(() => {
    // setLoading(false);
    axios
      .get(`https://ffxivcollect.com/api/orchestrions/${match.params.id}`)
      .then((res) => {
        console.log(res.data);
        setOrch(res.data);
        // setLoading(true);
      })
      .catch((e) => {
        console.log("실패");
      });
  }, []);

  if (orch) {
    return (
      <main>
        <div>{orch.id}</div>
        <div className="orch-card">
          <div className="card-head">
            <div className="img-box">
              <img src={orch.icon} alt="#" />
            </div>
            <h3>{orch.number}</h3>
            <h3>{orch.name}</h3>
          </div>
          <div className="card-body lists">
            <div className="orch-info list">
              <ul>
                <li>
                  <span className="no">카테고리: </span>
                  {orch.category.name}
                </li>
                <li>
                  <span className="no">패치: </span>
                  {orch.patch}
                </li>
                <li>
                  <span className="no">획득처: </span>
                  {orch.description}
                </li>
              </ul>
              <hr></hr>
              <h4>샘플곡</h4>
              <audio controls controlsList="nodownload">
                <source
                  src={`https://www.garlandtools.org/files/orchestrion/${orch.id}.ogg`}
                  type="audio/ogg"
                />
              </audio>
              <h4>
                출처:
                <a
                  href="http://www.garlandtools.org/db/"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  Garland Tools
                </a>
              </h4>
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
