import React from 'react'
import { useState } from "react";
import SearchBox from '../../components/SearchBox/SearchBox'

const Navbar = () => {
    const [searchTerm, setSearchTerm] = useState("");
    const handleInput = (event) => {
        const cleanInput = event.target.value.toLowerCase();
        setSearchTerm(cleanInput);
      };

    // const filteredBeers = beersArr.filter((beer) => {
    //     const beerNameLower = beer.name.toLowerCase();

    //     return beerNameLower.includes(searchTerm);
    // });

  return (
    <>    
        <div className='Navbar' >
            <SearchBox
                label={"beers"}
                searchTerm={searchTerm}
                handleInput={handleInput}
            />

            {/* <FiltersList searchArr={filteredBeers} /> */}

        </div>

    </>
  )
}

export default Navbar