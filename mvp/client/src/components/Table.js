import React from 'react';

function Table(props) {
  const {items} = props;

  return (
    <div>
        <h2>Participant</h2>
        <ul>
        {items.map(({ _id, name }) => (
            <li key={_id}>{name}</li>
        ))}
        </ul>
    </div>
  );
}

export default Table;
