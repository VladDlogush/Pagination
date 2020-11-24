import React, { useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import {
  setUsersListByCurrentPage,
  setCurrentPage,
} from '../redux/users/usersActions';
import { getUsersList, getCurrentPage, getUsersPerPage } from '../selectors';

const Pagination = () => {
  const dispatch = useDispatch();
  const usersList = useSelector(state => getUsersList(state));
  const currentPage = useSelector(state => getCurrentPage(state));
  const usersPerPage = useSelector(state => getUsersPerPage(state));

  const pageNumbers = [];

  // Get current posts
  const indexOfLastPost = currentPage * usersPerPage;
  const indexOfFirstPost = indexOfLastPost - usersPerPage;
  const currentUsers = usersList.slice(indexOfFirstPost, indexOfLastPost);

  useEffect(() => {
    dispatch(setUsersListByCurrentPage(currentUsers));
  });

  // Change page
  const paginate = pageNumber => dispatch(setCurrentPage(pageNumber));

  // eslint-disable-next-line no-plusplus
  for (let i = 1; i <= Math.ceil(usersList.length / usersPerPage); i++) {
    pageNumbers.push(i);
  }

  return (
    <nav>
      <ul className="pagination">
        {pageNumbers.map(number => (
          <li key={number} className="page-item">
            <a onClick={() => paginate(number)} href="!#" className="page-link">
              {number}
            </a>
          </li>
        ))}
      </ul>
    </nav>
  );
};

export default Pagination;
