import React from "react";
import { useParams } from "react-router-dom";

const EmotesDetail = ({ posts }) => {
  let { id } = useParams();
  let EmotePost = posts.find(function (item) {
    return item.id == id;
  });
  return (
    <main>
      <div className="emote-card">
        <div className="card-head">
          <div className="img-box">
            <img src={EmotePost.icon} alt="#" />
          </div>
          <h3>{EmotePost.number}</h3>
          <h3>{EmotePost.name}</h3>
        </div>
        <div className="card-body lists">
          <div className="emote-info list">
            <ul>
              <li>
                <span className="no">카테고리: </span>
                {EmotePost.category.name}
              </li>
              <li>
                <span className="no">패치: </span>
                {EmotePost.patch}
              </li>
              <li>
                <span className="no">커맨드: </span>
                {EmotePost.command}
              </li>
            </ul>
            {/* <hr></hr>
            <h4>얻을 수 있는 방법</h4>
            <p>
              {EmotePost.sources[0] === !undefined
                ? EmotePost.sources[0].text
                : null}
            </p> */}
          </div>
        </div>
      </div>
    </main>
  );
};

export default EmotesDetail;
