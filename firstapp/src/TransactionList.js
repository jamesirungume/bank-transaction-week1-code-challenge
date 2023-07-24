import React from 'react';

function TransactionList({ filteredTransactions, onDeleteTransaction }) {
  // This function is called when the 'delete' button is clicked for a transaction.
  // It calls the 'onDeleteTransaction' function passed as a prop from the parent component
  // and passes the 'id' of the transaction to be deleted.
  const handleDeleteTransaction = (id) => {
    onDeleteTransaction(id);
  };

  // Sort the 'filteredTransactions' array alphabetically by the 'description' field.
  // This creates a new array, and the original 'filteredTransactions' array remains unchanged.
  const sortedTransactions = filteredTransactions.sort((a, b) => a.description.localeCompare(b.description));

  return (
    <div className="App">
      <h1 id ="list" >Transacted lists</h1>
      <table className='table'>
        <thead>
          <tr>
            {/* Table headers for the transaction properties */}
            <th style={{ padding: '10px', border: '1px solid black' }}>Description</th>
            <th style={{ padding: '10px', border: '1px solid black' }}>Category</th>
            <th style={{ padding: '10px', border: '1px solid black' }}>Amount</th>
            <th style={{ padding: '10px', border: '1px solid black' }}>Date</th>
            <th style={{ padding: '10px', border: '1px solid black' }}>Actions</th>
          </tr>
        </thead>
        <tbody>
          {/* Map through the 'sortedTransactions' array and render each transaction in a row */}
          {sortedTransactions.map((transaction) => (
            <tr key={transaction.id}>
              {/* Display the transaction information in each cell */}
              <td>{transaction.description}</td>
              <td>{transaction.category}</td>
              <td>{transaction.amount}</td>
              <td>{transaction.date}</td>
              <td>
                {/* 'delete' button with onClick event to trigger the 'handleDeleteTransaction' function */}
                <button onClick={() => handleDeleteTransaction(transaction.id)}>delete</button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}

export default TransactionList;
