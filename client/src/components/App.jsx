import React, { useState, useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { fetchUsers } from '../services/user-api';
import { getUsersActions } from '../redux/usersActions';
import Users from './Users';
import Pagination from './Pagination';
import Loader from './Loader';

const App = () => {
  const [loading, setLoading] = useState(false);
  const [currentPage, setCurrentPage] = useState(1);
  // eslint-disable-next-line no-unused-vars
  const [usersPerPage, setUsersPerPage] = useState(5);
  const users = useSelector(state => state);
  const dispatch = useDispatch();

  useEffect(() => {
    setLoading(true);
    fetchUsers()
      .then(u => {
        dispatch(getUsersActions(u));
      })
      .finally(() => setLoading(false));
  }, []);

  // Get current posts
  const indexOfLastPost = currentPage * usersPerPage;
  const indexOfFirstPost = indexOfLastPost - usersPerPage;
  const currentUsers = users.slice(indexOfFirstPost, indexOfLastPost);

  // Change page
  const paginate = pageNumber => setCurrentPage(pageNumber);

  return (
    <div className="container mt-5">
      <h1 className="text-primary mb-3">Users</h1>
      {loading ? (
        <Loader />
      ) : (
        <>
          <Users users={currentUsers} />
          <Pagination
            usersPerPage={usersPerPage}
            totalUsers={users.length}
            paginate={paginate}
          />
        </>
      )}
    </div>
  );
};

export default App;
