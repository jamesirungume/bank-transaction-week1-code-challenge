import React, { useEffect, useState } from 'react';
import TransactionList from './TransactionList';
import NewForm from './NewForm';
import SearchByDescription from './SearchByDescription';
import './App.css';

function App() {
  const [displayAllTransaction, setDisplayTransaction] = useState([]);
  const [searchItem, setSearchItem] = useState("");

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

  const handleNewTransaction = (newTransaction) => {
    setDisplayTransaction((lastTransaction) => [...lastTransaction, newTransaction]);
  }

  const handleDeleteTransaction = (id) => {
    // Filter out the transaction with the given id and update the state
    setDisplayTransaction((prevTransactions) => prevTransactions.filter((transaction) => transaction.id !== id));
  };

  const filteredTransaction = displayAllTransaction.filter(transaction => {
    return transaction.description.toLowerCase().includes(searchItem.toLowerCase());
  });

  return (
    <div>
      <TransactionList filteredTransactions={filteredTransaction} onDeleteTransaction={handleDeleteTransaction} />
      <NewForm addNewTransactions={handleNewTransaction} />
      <SearchByDescription searchNewItem={searchItem} onsearchNewItem={setSearchItem} />
    </div>
  );
}

export default App;
