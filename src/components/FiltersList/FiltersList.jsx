import React from 'react'
import Filter from '../Filter/Filter';
import './FiltersList.scss'

const FiltersList = (props) => {
    const { filtersArr, toggleChecked } = props;

    const filtersJSX = filtersArr.map((filter) => (
        <Filter
            key={filter.id}
            label={filter.text}
            value={filter.checked}
            toggleChecked={toggleChecked}
            filterId={filter.id}
        />
    ));
    console.log("filtersjsx=",filtersJSX);
    return (
        <div className="filter-list">{filtersJSX}</div>
    );
}

export default FiltersList
