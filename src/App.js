import React, { useState } from 'react';
import './App.css';
import Keypad from './components/Keypad';
import Result from './components/Result';
import Alerts from './components/Alerts';
import ShowTickets from './components/ShowTickets';
import uuid from 'uuid';
const uuidv4 = require('uuid/v4');

function App() {
  const [result, setResult] = useState('');
  const [tickets, setTickets] = useState([]);
  const [showMessage, setShowMessage] = useState(false);
  const [message, setMessage] = useState('');
  const [count, setCount] = useState(1);

  const deleteTicket = id => {
    const data = tickets.filter(ticket => ticket.id !== id);
    setCount(count - 1);
    setTickets(data);
  };
  const randomNumber = () => {
    setResult(Math.floor(100000 + Math.random() * 900000));
  };
  const backSpace = () => {
    if (result.length !== 0) {
      setResult(result.substring(0, result.length - 1));
    } else {
      error('Enter some number to remove');
    }
  };
  const cb = value => {
    if (result.length <= 5) {
      setResult(result + value);
    } else {
      error('Only 6 digit tickets are allowed');
    }
  };
  const error = message => {
    setShowMessage(true);
    setMessage(message);
    setTimeout(() => {
      setShowMessage(false);
      setMessage('');
    }, 3000);
  };
  const deleteAll = () => {
    setResult('');
  };
  const removeTicket = () => {
    setTickets([]);
  };
  const addTicket = () => {
    if (result !== '') {
      if (count <= 5) {
        if (parseInt(result) < 100000 || parseInt(result) > 999999) {
          error('Value should be between 100000 & 999999');
        } else {
          setCount(count + 1);
          const ticket = { count: count, value: result, id: uuidv4() };
          setTickets(tickets => [...tickets, ticket]);
          setResult('');
        }
      } else {
        error('Only 5 tickets allowed');
      }
    } else {
      error('Set the ticket id before adding ticket');
    }
  };
  return (
    <div className='ta-center'>
      <center>
        {showMessage ? <Alerts message={message} /> : ''}
        {result !== '' ? <Result result={result} /> : ''}
        <Keypad
          cb={cb}
          backSpace={backSpace}
          deleteAll={deleteAll}
          randomNumber={randomNumber}
        />
        <button className='width' name='add' onClick={addTicket}>
          <i className='fa fa-plus'></i>Add Tickets
        </button>
        <button className='width' name='remove' onClick={removeTicket}>
          <i className='fa fa-minus'></i>Remove All
        </button>
        {tickets.length ? (
          <ShowTickets tickets={tickets} deleteTicket={deleteTicket} />
        ) : (
          'No tickets to show'
        )}
      </center>
    </div>
  );
}

export default App;
