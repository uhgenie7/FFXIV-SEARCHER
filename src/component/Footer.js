import React from "react";
import github from "../img/contact/github.png";
import tistory from "../img/contact/tistory.png";
const Footer = () => {
  return (
    <footer>
      <div className="inner">
        FINAL FANTASY XIV © 2010 - 2020 SQUARE ENIX CO., LTD. All Rights
        Reserved.
        <br />
        본 사이트는 Square Enix 및 Actoz Soft와 관련이 없습니다.
        <br />
        ALL FINAL FANTASY XIV CONTENT IS PROPERTY OF SQUARE ENIX CO., LTD
      </div>
      <div className="sns">
        <a
          href="https://github.com/uhj1993/lodestone"
          target="_blank"
          rel="noopener noreferrer"
        >
          <img src={github} alt="githube" />
        </a>
        <a
          href="https://jineecode.tistory.com/"
          target="_blank"
          rel="noopener noreferrer"
        >
          <img src={tistory} alt="tistory" />
        </a>
      </div>
    </footer>
  );
};

export default Footer;
