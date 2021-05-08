import React from "react";
import Loading from "../Loading";
import styled from "styled-components";
import { useHistory } from "react-router-dom";

const Orch = ({ posts, setPosts, loading, tab }) => {
  const history = useHistory();
  const allPage = posts.map((item, index) => {
    return (
      <tr
        onClick={() => {
          history.push(`/orchestrions/${item.id}`);
        }}
      >
        <th>
          <img src={item.icon} alt="악보" />
        </th>
        <th>{item.name}</th>
        <th>{item.description}</th>
        <th>{item.category.name}</th>
        <th>{item.patch}</th>
      </tr>
    );
  });

  const filterPage = posts
    .filter((item) => {
      return item.category.id === tab;
    })
    .map((item, index) => {
      return (
        <tr
          onClick={() => {
            history.push(`/orchestrions/${item.id}`);
          }}
        >
          <th>
            <img src={item.icon} alt="악보" />
          </th>
          <th>{item.name}</th>
          <th>{item.description}</th>
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

export default Orch;
