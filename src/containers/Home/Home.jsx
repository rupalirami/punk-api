import React, { useState } from 'react'
import CardList from '../../components/CardList/CardList'
import Navbar from '../../components/Navbar/Navbar'
import beers from '../../data/beers'
import './Home.scss'


const Home = () => {
    const [searchTerm, setSearchTerm] = useState("");
    const [searched, setSearched] = useState(false);
    // const [showFiltered, setFiltered] = useState(false);
    const handleInput = (event) => {
        const cleanInput = event.target.value.toLowerCase();
        setSearchTerm(cleanInput);
        const handleABVChecked = (event) => {
        setSearched = !searched
      }
    };
    const searchedBeers= beers.filter((beer) => {
        const beerNameLower = beer.name.toLowerCase();
        return beerNameLower.includes(searchTerm);
    });

console.log("searchedBeers");
console.log(searchedBeers);

    return (
        <div className='Homepage'>
            <Navbar 
                className="Navbar"
                searchTerm={searchTerm}
                handleInput={handleInput}
            />
            <CardList beersArr={searchedBeers} />
        </div>
    )
}

export default Home;