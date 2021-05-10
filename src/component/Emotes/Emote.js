import React from "react";
import Loading from "../Loading";
import { useHistory } from "react-router-dom";

const Emote = ({ posts, loading }) => {
  const history = useHistory();
  const allPage = posts.map((item, index) => {
    return (
      <tr
        key={index}
        onClick={() => {
          history.push(`/emotes/${item.id}`);
        }}
      >
        <th>
          <img src={item.icon} alt={item.name} />
        </th>
        <th>{item.name}</th>
        <th>{item.command}</th>
        <th>{item.category.name}</th>
        <th>{item.patch}</th>
      </tr>
    );
  });
  return (
    <>
      {loading === false ? <Loading /> : null}
      <div>
        <table>
          <thead>
            <tr>
              <th></th>
              <th>악보명</th>
              <th>커맨드</th>
              <th>카테고리</th>
              <th>패치버전</th>
            </tr>
          </thead>
          <tbody>{allPage}</tbody>
        </table>
      </div>
    </>
  );
};

export default Emote;
