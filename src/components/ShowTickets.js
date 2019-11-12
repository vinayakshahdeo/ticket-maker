import React from 'react';

const ShowTickets = ({ tickets, deleteTicket }) => {
  const cb = id => {
    deleteTicket(id);
  };
  return (
    <div>
      Your Selected Tickets are:
      <br />
      <div className='test'>
        {Object.entries(tickets).map(([key, val]) => (
          <div key={val.id}>
            <div className='some'>ticket #{parseInt(key) + 1} </div>{' '}
            <i className='fa fa-trash red' onClick={() => cb(val.id)}></i>{' '}
            {val.value}
          </div>
        ))}
      </div>
    </div>
  );
};

export default ShowTickets;
