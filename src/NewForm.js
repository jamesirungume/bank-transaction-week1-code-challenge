import React, {useState,useEffect} from "react";
function NewForm({addNewTransactions}) {
    const [updatedTransaction,setUpdatedTransaction] = useState({
        description:"",
        amount:"",
        category:"",
        date:"",
    })
 function handleInputChange(e) {
    const { name,value } = e.target;
    setUpdatedTransaction((lastTransaction) => ({
        ...lastTransaction,
        [name]: value,
 }))
  
 }
 const handleSubmit = () => {
  addNewTransactions(updatedTransaction);
  setNewTransaction({
  description:"",
  amount:"",
  category:"",
  date:"",
})
 }



return (
    <div>
      <h2>Add New Transaction</h2>
      <form>
        <label>
          Description:
          <input
            type="text"
            name="description"
            value={updatedTransaction.description}
            onChange={handleInputChange}
          />
        </label>
        <label>
          Category:
          <input
            type="text"
            name="category"
            value={updatedTransaction.category}
            onChange={handleInputChange}
          />
        </label>
        <label>
          Amount:
          <input
            type="number"
            name="amount"
            value={updatedTransaction.amount}
            onChange={handleInputChange}
          />
        </label>
        <label>
          Date:
          <input
            type="date"
            name="date"
            value={updatedTransaction.date}
            onChange={handleInputChange}
          />
        </label>
        <button  onClick ={handleSubmit} >
           Add transaction
        </button>
        </form>
</div>
)
}
export default NewForm;