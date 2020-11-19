import React from 'react';
import PropTypes from 'prop-types';

const Users = ({ users }) => (
  <ul className="list-group mb-4">
    {users.map(user => (
      <li key={user.id} className="list-group-item">
        <p>Name: {user.name}</p>
        <p>Surname: {user.surname}</p>
        <p>Description: {user.desc}</p>
      </li>
    ))}
  </ul>
);

Users.propTypes = {
  users: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.string.isRequired,
      name: PropTypes.string.isRequired,
      surname: PropTypes.string.isRequired,
      desc: PropTypes.string.isRequired,
    }).isRequired,
  ).isRequired,
};

export default Users;
