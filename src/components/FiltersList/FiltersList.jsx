import React from 'react'
import Filter from '../Filter/Filter';
import './FiltersList.scss'

const FiltersList = (props) => {
    const { filtersArr, toggleCheckedFilter } = props;

    const filtersJSX = filtersArr.map((filter) => (
        <Filter
            label={filter.text}
            value={filter.checked}
            onChange={toggleCheckedFilter}
            key={filter.id}
        />
    ));
    console.log(filtersJSX)
    return (
        <div className="filter-list">{filtersJSX}</div>
    );
}

export default FiltersList
