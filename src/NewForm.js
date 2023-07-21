import React from "react";
function NewForm() {
    const [updatedTransaction,setUpdatedTransaction] = useState({
        descrip
    })
 function handleTransaction(e) {
    const { name,value } = e.target;
    setUpdatedTransaction((lastTransaction) => ({
        ...lastTransaction,
        [name]: value,
 }))
  
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
        <button>
            
        </button>
        </form>
</div>
)
}