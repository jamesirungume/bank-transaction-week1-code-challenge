import React from 'react';
import './App.css';

function SearchTransactionForm({ searchItem, onsearchNewItem }) {
  // This function is called when the value in the search input field changes.
  // It calls the 'onsearchNewItem' function passed as a prop from the parent component
  // and passes the new value entered in the search input as an argument.
  function handleDescriptionSearch(e) {
    onsearchNewItem(e.target.value);
  }

  return (
    <div className="search-form-container">
      <form>
        {/* Label for the search input field */}
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
