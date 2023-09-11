import React from 'react';
import './index.css'

const FilterData = (props) => {
  return (
    <div>
        <select
          value={props.value}
          onChange={props.handleFilterChange}
        >
          <option value="">{props.defaultText || 'Filter by'}</option>
        {props.options.map((option) => (
          <option key={option.value} value={option.value}>
            {option.label}
          </option>
        ))}
        </select>
    </div>
  )
}

export default FilterData