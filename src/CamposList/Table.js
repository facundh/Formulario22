import React from 'react';

const Table = ({children}) => {
  return (
    <table className="table table-striped w-50 text-center mx-auto">
    <thead>
      <tr>
        <th scope="col">#</th>
        <th scope="col">Label</th>
        <th scope="col">Type</th>
        <th scope="col">Required</th>
        <th scope="col">Style</th>
      </tr>
    </thead>
    {children}
    </table>
    );
};

export default Table;