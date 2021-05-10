import React from "react";

function Main() {
  return (
    <>
      <main className="main">
        <h2 className="main-title">Main</h2>
        <div className="main-container">
          <h3>어서오세요</h3>
          <p>
            <strong>FFXIV SEARCHER</strong>은 REST API를 통해 JSON 형식으로
            방대한 양의 FINAL FANTASY XIV 게임 데이터를 제공해주는
            <strong> XIVAPI</strong>로 데이터를 받아와 프로필을 검색할 수 있는
            사이트입니다. <br />
            <br />
            또한 FFXIV를 플레이하는데 도움되는 자료를 수집합니다.
          </p>
        </div>
      </main>
    </>
  );
}

export default Main;
