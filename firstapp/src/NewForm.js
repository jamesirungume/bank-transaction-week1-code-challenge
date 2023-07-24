import React, { useState } from "react";

function NewForm({ addNewTransaction }) {
  // Initialize state using React's 'useState' hook to store the form data.
  const [updatedTransaction, setUpdatedTransaction] = useState({
    description: "",
    amount: "",
    category: "",
    date: "",
  });

  // This function is called whenever there's a change in the form inputs.
  // It updates the state with the new values for the corresponding input fields.
  function handleInputChange(e) {
    const { name, value } = e.target;
    setUpdatedTransaction((lastTransaction) => ({
      ...lastTransaction,
      [name]: value,
    }));
  }
  console.log(updatedTransaction);

  // This function is called when the form is submitted.
  const handleSubmit = (e) => {
    e.preventDefault(); // Prevents the default form submission behavior.
    
    // Calls the 'addNewTransaction' function passed as a prop from the parent component
    // and passes the current form data as an argument to add the new transaction.
    addNewTransaction(updatedTransaction);

    // After the form is submitted, reset the form state to clear the input fields.
    setUpdatedTransaction({
      description: "",
      amount: "",
      category: "",
      date: "",
    });
  };

  return (
    <div className="form-container">
      <h2>Add New Transaction</h2>
      <form>
        {/* Input field for the transaction description */}
        <label className="form-label">Description:</label>
        <input
          className="form-input"
          type="text"
          name="description"
          value={updatedTransaction.description}
          onChange={handleInputChange}
        />

        {/* Input field for the transaction category */}
        <label className="form-label">Category:</label>
        <input
          className="form-input"
          type="text"
          name="category"
          value={updatedTransaction.category}
          onChange={handleInputChange}
        />

        {/* Input field for the transaction amount */}
        <label className="form-label">Amount:</label>
        <input
          className="form-input"
          type="number"
          name="amount"
          value={updatedTransaction.amount}
          onChange={handleInputChange}
        />

        {/* Input field for the transaction date */}
        <label className="form-label">Date:</label>
        <input
          className="form-input"
          type="date"
          name="date"
          value={updatedTransaction.date}
          onChange={handleInputChange}
        />

        {/* Button to submit the form */}
        <button className="form-button" onClick={handleSubmit}>
          Add Transaction
        </button>
      </form>
    </div>
  );
}

export default NewForm;
