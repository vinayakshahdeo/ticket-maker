import React from 'react';

const Result = ({ result }) => {
  return (
    <div>
      {result.length === '' ? (
        <small>
          <div className='danger'>Enter 6 digits</div>
        </small>
      ) : (
        <h3>{result}</h3>
      )}
    </div>
  );
};
export default Result;
