import React, { useEffect, useState } from 'react';
import './App.css';

function TransactionList() {
  const [displayTransaction, setDisplayTransaction] = useState([]);

  useEffect(() => {
    fetch("http://localhost:3000/transactions")
      .then((resp) => resp.json())
      .then((data) => {
        setDisplayTransaction(data);
      })
      .catch((error) => {
        console.error('Error fetching data:', error);
      });
  }, []);

  return (
    <div className="App">
      <h1>Transacted lists</h1>
      <table>
        <thead>
          <tr>
            <th style={{ padding: '10px', border: '1px solid black' }}>Description</th>
            <th style={{ padding: '10px', border: '1px solid black' }}>Category</th>
            <th style={{ padding: '10px', border: '1px solid black' }}>Amount</th>
            <th style={{ padding: '10px', border: '1px solid black' }}>Date</th>
          </tr>
        </thead>
        <tbody>
          {displayTransaction.map((transaction) => (
            <tr key={transaction.id}>
              <td>{transaction.description}</td>
              <td>{transaction.category}</td>
              <td>{transaction.amount}</td>
              <td>{transaction.date}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}

export default TransactionList;
