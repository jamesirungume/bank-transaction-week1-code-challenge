import React, { useEffect, useState } from 'react';
import './App.css';

function TransactionList({filtereTransactions}) {
  

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
              <td>{filtereTransactions.description}</td>
              <td>{filtereTransactions.category}</td>
              <td>{filtereTransactions.amount}</td>
              <td>{filtereTransactions.date}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}

export default TransactionList;
