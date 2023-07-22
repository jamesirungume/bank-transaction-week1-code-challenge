import React from "react";

function SearchByDescription({searchItem,onSearchItemChange}) {
    function handleDescriptionSearch(e) {
        onSearchItemChange(e.target.value)
    }
  return (
    <div>
        <form style={{ padding: '10px'}}>
            <label>
                Search Transaction: 
            <input  placeholder ="search" type="text" name="description"  value= {searchItem} onChange={handleDescriptionSearch}/>
            </label>
        </form>
    </div>
  )
}
export default SearchByDescription;