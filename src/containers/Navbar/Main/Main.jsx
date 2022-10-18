import React from 'react'
import CardList from '../../../components/CardList/CardList'
import beers from '../../../data/beers'

const Main = () => {
  return (
    <div className='Mainpage'>
        <CardList beersArr={beers}/>
    </div>
  )
}

export default Main