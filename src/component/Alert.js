import React from "react";

function Alert() {
  return (
    <div className="notice-alert">
      <h2>LODESTONE</h2>
      <p>
        HTTP 오류 코드를 수신하면 API의 일부가 아닌 Lodestone 자체에서 발생했을
        가능성이 큽니다. 일반적인 오류 응답은 다음과 같습니다. <br />
        404 Not Found / 429 Too Many Requests / 503 Maintenance
      </p>
      <button>닫기</button>
    </div>
  );
}

export default Alert;
