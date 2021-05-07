import React from "react";

const Another = () => {
  return (
    <main>
      <h2 className="main-title">Another</h2>
      <div className="main-container">
        <h3>유용한 사이트</h3>
        <p>FFXIV를 플레이하는데 도움되는 사이트 모음</p>
        <div className="lists">
          <div className="list">
            <h4 className="list-title">전투</h4>
            <ul>
              <li>
                <span className="no">01</span>
                <a href="http://ffxiv.ariyala.com/" target="_blank">
                  Ariyala 장비 시뮬레이터
                </a>
              </li>
              <li>
                <span className="no">02</span>
                <a href="https://etro.gg/" target="_blank">
                  Etro 장비 시뮬레이터
                </a>
              </li>
              <li>
                <span className="no">03</span>
                <a href="https://ko.fflogs.com/" target="_blank">
                  KOREA FFLOG
                </a>
              </li>
              <li>
                <span className="no">04</span>
                <a href="https://ffxiv-eureka.com/logograms" target="_blank">
                  에우레카 트래커
                </a>
              </li>
            </ul>
          </div>
          <div className="list">
            <h4 className="list-title">채집</h4>
            <ul>
              <li>
                <span className="no">01</span>
                <a
                  href="https://ariette.github.io/garlandbell/"
                  target="_blank"
                >
                  KOREA 갈론드벨
                </a>
              </li>
              <li>
                <span className="no">02</span>
                <a href="http://www.garlandtools.org/bell/" target="_blank">
                  GLOBAL 갈론드벨
                </a>
              </li>
              <li>
                <span className="no">03</span>
                <a href="https://ffxivteamcraft.com/search" target="_blank">
                  FFXIV 팀크래프트
                </a>
              </li>
              <li>
                <span className="no">04</span>
                <a href="https://ko.ff14angler.com/" target="_blank">
                  고양이는 배고프다
                </a>
              </li>
              <li>
                <span className="no">05</span>
                <a href="http://ff14fish.carbuncleplushy.com/" target="_blank">
                  피쉬트래커
                </a>
              </li>
            </ul>
          </div>
          <div className="list">
            <h4 className="list-title">ETC</h4>
            <ul>
              <li>
                <span className="no">01</span>
                <a href="https://arrtripletriad.com/en/cards" target="_blank">
                  트리플 트라이어 카드 (글로벌)
                </a>
              </li>
              <li>
                <span className="no">02</span>
                <a href="https://ff14housing.com/" target="_blank">
                  하우징 (글로벌)
                </a>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </main>
  );
};

export default Another;
