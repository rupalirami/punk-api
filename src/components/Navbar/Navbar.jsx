import React from 'react'
import { useState } from "react";
import FiltersList from '../FiltersList/FiltersList';
import SearchBox from '../SearchBox/SearchBox'
import './Navbar.scss'

const Navbar = (props) => {
    const { searchTerm, handleInput, filtersArr, toggleChecked } = props;
console.log("filtersArr=",filtersArr);

    return (

        <div className='Navbar' >
            <SearchBox
                searchTerm={searchTerm}
                handleInput={handleInput}
            />
            <FiltersList filtersArr={filtersArr} toggleChecked={toggleChecked}/>
        </div>

    )
}

export default Navbar