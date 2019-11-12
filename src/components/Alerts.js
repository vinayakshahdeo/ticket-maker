import React from 'react';

const Alerts = ({ message }) => {
  return (
    <div className='alert alert-danger'>
      <strong>{message}</strong>
    </div>
  );
};
export default Alerts;
