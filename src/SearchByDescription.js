import React from 'react';
import './App.css';


function SearchTransactionForm({ searchItem, handleDescriptionSearch }) {
  return (
    <div className="search-form-container">
      <form>
        <label className="label">SEARCH TRANSACTION:</label>
        <input
          className="input"
          placeholder="Search"
          type="text"
          name="description"
          value={searchItem}
          onChange={handleDescriptionSearch}
        />
      </form>
    </div>
  );
}

export default SearchTransactionForm;
