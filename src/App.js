import React, { useEffect, useState } from 'react';
import TransactionList from './TransactionList';
import NewForm from './NewForm';
import searchByDescription from './searchByDescription';
import './App.css';

function App() {
  const [displayTransaction, setDisplayTransaction] = useState([]);
  const [ searchItem,setSearchItem ] = useState("")
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
  setDisplayTransaction((lastTransaction) => [...lastTransaction,newTransaction])
  }

const filteredTransaction = displayTransaction.filter(transactions => {
  transactions.description.toLowerCase().includes(searchItem.toLowerCase())
})
 
  return (
    <div>
     <TransactionList  filteredTransactions={filteredTransaction}/>
     <NewForm addNewTransactions={handleNewTransaction}/>
     <searchByDescription searchNewItem={searchItem} onsearchNewItem={setSearchItem} />
    </div>
  )

}

export default App;
