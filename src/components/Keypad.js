import React from 'react';
import Image from '../test.png';
const Keypad = ({ cb, backSpace, deleteAll, randomNumber }) => {
  return (
    <>
      <div className='inliner'>
        <div className='button'>
          <button name='7' onClick={e => cb(e.target.name)}>
            7
          </button>
          <button name='8' onClick={e => cb(e.target.name)}>
            8
          </button>
          <button name='9' onClick={e => cb(e.target.name)}>
            9
          </button>
          <br />
          <button name='4' onClick={e => cb(e.target.name)}>
            4
          </button>
          <button name='5' onClick={e => cb(e.target.name)}>
            5
          </button>
          <button name='6' onClick={e => cb(e.target.name)}>
            6
          </button>
          <br />

          <button name='1' onClick={e => cb(e.target.name)}>
            1
          </button>
          <button name='2' onClick={e => cb(e.target.name)}>
            2
          </button>
          <button name='3' onClick={e => cb(e.target.name)}>
            3
          </button>
          <br />
          <button name='C' onClick={() => backSpace()}>
            <i className='fa fa-arrow-left'></i>
          </button>
          <button name='0' onClick={e => cb(e.target.name)}>
            0
          </button>
          <button name='CE' onClick={() => deleteAll()}>
            <i className='fa fa-trash'></i>
          </button>
          <br />
        </div>
        <img
          src={Image}
          alt='randomizer'
          onClick={() => randomNumber()}
          height='240'
        />
      </div>
    </>
  );
};

export default Keypad;
