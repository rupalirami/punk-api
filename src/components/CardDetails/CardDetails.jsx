import React from "react";
import whiteCross from "../../assets/images/white-cross.png"

const CardDetails = (props) => {
  const {
    beer_name,
    beer_description,
    beer_food_pairing,
    beer_brewers_tips,
    handleShowDetails
  } = props;
  return (
    <div className="beer-card-details">
      <img
        src={whiteCross}
        alt="Close Card"
        className="beer-card-details__cross"
        onClick={handleShowDetails}
      />
      <h3>{beer_name}</h3>
      <p className="beer-description">{beer_description}</p>
      <div className="beer-food-pairing">{beer_food_pairing}</div>
      <div className="beer-brewers-tips">{beer_brewers_tips}</div>
    </div>
  );
};

export default CardDetails;
