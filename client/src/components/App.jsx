import React from 'react';
import Users from './Users';
import Pagination from './Pagination';

const App = () => (
  <div className="container mt-5">
    <h1 className="text-primary mb-3">Users</h1>
    <Users />
    <Pagination />
  </div>
);

export default App;
