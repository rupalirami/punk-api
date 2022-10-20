import React from 'react'
import { useState } from "react";
import FiltersList from '../FiltersList/FiltersList';
import SearchBox from '../SearchBox/SearchBox'
import './Navbar.scss'

const Navbar = (props) => {
    const { searchTerm, handleInput, filtersArr, toggleCheckedFilter } = props;
console.log(filtersArr);

    return (

        <div className='Navbar' >
            <SearchBox
                searchTerm={searchTerm}
                handleInput={handleInput}
            />
            <FiltersList filtersArr={filtersArr} onChange={toggleCheckedFilter}/>
        </div>

    )
}

export default Navbar