import React from 'react';
import { Link } from 'react-router-dom';

const NotFound = () => {
  return (
    <main>
        <h1>Whoops, page not found :(</h1>
        <h2><Link to="/">Return Back</Link></h2>
    </main>
  )
};

export default NotFound;
