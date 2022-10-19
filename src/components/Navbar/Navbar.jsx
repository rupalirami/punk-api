import React from 'react'
import { useState } from "react";
import SearchBox from '../SearchBox/SearchBox'
import './Navbar.scss'

const Navbar = (props) => {
    const { searchTerm, handleInput } = props;

    // const filteredBeers = beersArr.filter((beer) => {
    //     const beerNameLower = beer.name.toLowerCase();

    //     return beerNameLower.includes(searchTerm);
    // });
    // const handleABVChecked = (event) => {
    //     setChecked = !checked
    // }

    return (

        <div className='Navbar' >
            <SearchBox
                searchTerm={searchTerm}
                handleInput={handleInput}
            />
            {/* <div className='Checkbox'>
                <label>
                    <input 
                        type="checkbox" 
                        checked="checked"
                        // onChange={handleChange}
                    />
                    {"High ABV (> 6.0%)"}
                </label>
                <label>
                    <input 
                        type="checkbox" 
                        checked="checked"
                        // onChange={handleChange}
                    />
                    {"Classic Range"}
                </label>
                <label>
                    <input 
                        type="checkbox" 
                        checked="checked"
                        // onChange={handleChange}
                    />
                    {"Acidic (ph < 4)"}
                </label>
            </div> */}
        </div>

    )
}

export default Navbar