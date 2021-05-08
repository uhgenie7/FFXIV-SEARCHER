import React from "react";
import Loading from "./Loading";
import styled from "styled-components";
import { useHistory } from "react-router-dom";

const Orch = ({ posts, loading, tab }) => {
  const history = useHistory();
  function handleClick(item) {
    history.push(`/orchestrions/${item}`);
  }

  console.log(posts.id);
  const allPage = posts.map((item) => {
    return (
      <tr
        onClick={() => {
          handleClick(item.id);
        }}
      >
        {tableFun(item)}
      </tr>
    );
  });

  const filterPage = posts
    .filter((item) => {
      return item.category.id === tab;
    })
    .map((item) => {
      return (
        <tr
          onClick={() => {
            handleClick(item.id);
          }}
        >
          {tableFun(item)}
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
              <th>획득처</th>
              <th>카테고리</th>
              <th>패치버전</th>
            </tr>
          </thead>
          <tbody>{tab === 0 ? allPage : filterPage}</tbody>
        </table>
      </div>
    </>
  );
};

function tableFun(item) {
  return (
    <>
      <th>
        <img src={item.icon} alt="악보" />
      </th>
      <th>{item.name}</th>
      <th>{item.description}</th>
      <th>{item.category.name}</th>
      <th>{item.patch}</th>
    </>
  );
}

export default Orch;
