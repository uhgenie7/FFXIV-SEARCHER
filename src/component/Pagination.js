import React from "react";

const Pagination = ({ postsPerPage, totalPosts, paginate }) => {
  const pageNumbers = [];
  for (let i = 1; i <= Math.ceil(totalPosts / postsPerPage); i++) {
    pageNumbers.push(i);
  }
  return (
    <div>
      <ul className="pagination">
        {pageNumbers.map((number) => (
          <li
            key={number}
            className="page-item"
            onClick={() => paginate(number)}
          >
            <span>{number}</span>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default Pagination;
