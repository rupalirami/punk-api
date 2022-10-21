import React from 'react'
import "./Card.scss";

const Card = (props) => {
    const { beer_image, beer_name, beer_tagline, beer_description, beer_abv, beer_first_brewed, beer_ph} = props;
    const shortendDescr = beer_description.length <= 200 ? beer_description : beer_description.substring(0,(beer_description.indexOf(".",200)+1))+".."

  return (
    <div className='beer-details'>
        <img 
            className="beer-image"
            src={beer_image}
            alt={beer_name}
            // style={'background-color: rgb(230,230,230)'}
            // style={{background-color: transparent}}
        />
        <h2 className="beer-name">{beer_name}</h2>
        {/* <div className="beer-tagline">{beer_tagline}</div> */}
        <p className="beer-description">{shortendDescr}</p>
        <div className='beer-filters'>
          <div className="beer-abv">ABV: {beer_abv}</div>
          <div className="beer-first-brewed">First Brewed: {beer_first_brewed}</div>
          <div className="beer-ph">ph: {beer_ph}</div>
        </div>
    </div>
  )
}

export default Card