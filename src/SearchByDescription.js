import React from "react";

function SearchByDescription({searchItem,onSearchItemChange}) {
    function handleDescriptionSearch(e) {
        onSearchItemChange(e.target.value)
    }
  return (
    <div>
        <form>
            <label>
                search Transaction
            <input type="text" name="description"  value= {searchItem} onChange={handleDescriptionSearch}/>
            </label>
        </form>
    </div>
  )
}
export default SearchByDescription;