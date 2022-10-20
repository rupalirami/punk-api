import React from 'react'
import "./Card.scss";

const Card = (props) => {
    const { beer_image, beer_name, beer_tagline, beer_description } = props;
  return (
    <div className='beer-details'>
        <img 
            className="beer-image"
            src={beer_image}
            alt={beer_name}
            // style={{background-color: transparent}}
        />
        <h2 className="beer-name">{beer_name}</h2>
        <div className="beer-tagline">{beer_tagline}</div>
        <p className="beer-description">{beer_description}</p>
    </div>
  )
}

export default Card