import React, { useState } from "react";
import CardList from "../../components/CardList/CardList";
import Navbar from "../../components/Navbar/Navbar";
import beers from "../../data/beers";
import filters from "../../data/filters";
import "./Home.scss";

// https://api.punkapi.com/v2/beers

const Home = () => {
  const [searchTerm, setSearchTerm] = useState("");
  const handleInput = (event) => {
    const cleanInput = event.target.value.toLowerCase();
    setSearchTerm(cleanInput);
  };
  const [filtersArr, updateFiltersArr] = useState(filters);

  const toggleChecked = (id) => {
    console.log("id",id);
    const newFiltersArr = filtersArr.map((filter) =>
      id === filter.id ? { ...filter, checked: !filter.checked } : { ...filter }
    );
    updateFiltersArr(newFiltersArr);
    console.log(`newfiltersArr=${newFiltersArr[0]}`);
  };
  // console.log("beers[1]=",beers[1]);

  const updatedBeers = beers.filter((beer) => {
    const beerNameLower = beer.name.toLowerCase();
    console.log("first brewed",beer.first_brewed.substring(3,7));
    // console.log(beer.description.substring(0,(beer.description.indexof(".",300)+1)));
    console.log(beer.description.length)
    console.log(beer.description.substring(0,(beer.description.indexOf(".",200)+1))+"...");
    return beerNameLower.includes(searchTerm)
    && (filtersArr[0].checked ? beer.abv > 6: true )
    && (filtersArr[1].checked ? beer.first_brewed.substring(3,7) < 2010: true )
    && (filtersArr[2].checked ? beer.ph < 4: true );
  });

  // console.log("NewFiltersArr=")
  // console.log(filtersArr);
  // console.log("UpdatedBeers=");
  // console.log(updatedBeers);

  return (
    <div className="Homepage">
      <Navbar
        className="Navbar"
        searchTerm={searchTerm}
        handleInput={handleInput}
        filtersArr={filtersArr}
        toggleChecked={toggleChecked}
      />
      <CardList beersArr={updatedBeers} />
    </div>
  );
};

export default Home;
