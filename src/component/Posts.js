import React from "react";
import Loading from "./Loading";
import styled from "styled-components";

const Posts = ({ posts, loading }) => {
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
          <tbody>
            {posts.map((item, index) => {
              return (
                <tr>
                  <th>
                    <img src={item.icon} alt="악보" />
                  </th>
                  <th>{item.name}</th>
                  <th>{item.description}</th>
                  <th>{item.category.name}</th>
                  <th>{item.patch}</th>
                </tr>
              );
            })}
          </tbody>
        </table>
      </div>
    </>
  );
};

export default Posts;
