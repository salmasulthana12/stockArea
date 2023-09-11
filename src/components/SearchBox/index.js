import React from 'react';
import './index.css'

const SearchBar = (props) => {
  return (
    <div>
        <input
        className='search-field'
          type="text"
          placeholder="Search warehouses"
          name="searchTerm"
          value={props.value}
          onChange={props.handleSearchInputChange}
        />
    </div>
  )
}

export default SearchBar