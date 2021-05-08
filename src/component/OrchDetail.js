import React from "react";

const OrchDetail = () => {
  return (
    <main>
      <div className="orch-card">
        <div className="card-head">
          <div className="img-box">
            <img src="#" alt="#" />
          </div>
          <h3>001</h3>
          <h3>Skyrise</h3>
        </div>
        <div className="card-body lists">
          <div className="orch-info list">
            <ul>
              <li>
                <span class="no">카테고리: </span>카테고리
              </li>
              <li>
                <span class="no">패치: </span>5.5
              </li>
              <li>
                <span class="no">획득처: </span>어디서
              </li>
            </ul>
            <hr></hr>
            <h4>샘플곡</h4>
            <audio></audio>
          </div>
        </div>
      </div>
    </main>
  );
};

export default OrchDetail;
