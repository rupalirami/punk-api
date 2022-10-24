import React, { useState } from "react";
import Button from "../Button/Button";
import whiteCross from "../../assets/images/white-cross.png";
import "./Card.scss";

const Card = (props) => {
  const {
    beer_image,
    beer_name,
    beer_tagline,
    beer_description,
    beer_abv,
    beer_first_brewed,
    beer_ph,
    beer_food_pairing,
    beer_brewers_tips,
  } = props;
  const [showDetails, setShowDetails] = useState(false);
  const handleClick = () => {
    setShowDetails(!showDetails);
    // console.log("showDetails=", showDetails);
  };
  const buttonJSX = (
    <div className="beer-details__button">
      <div onClick={handleClick}>
        <Button buttonText={"More Details"} isSecondary={true} />
      </div>
    </div>
  );
  const detailsJSX = (
    <div className="beer-details beer-details__content">
      <img
        src={whiteCross}
        className="beer-details__cross"
        onClick={handleClick}
        alt="Close details"
      />
      <h3 className="beer-name">{beer_name}</h3>
      <p className="beer-description">{beer_description}</p>
      <div className="beer-subheading">Food Pairings:</div>
      {/* <div className="beer-food-pairing">{beer_food_pairing.toString()}</div> */}
      <div className="beer-food-pairing">{beer_food_pairing.join(", ")}</div>
      {/* <div className="beer-subheading">Brewer Tips:</div>
      <div className="beer-brewers-tips">{beer_brewers_tips}</div> */}
    </div>
  );
  return (
    // <div className="beer-details">
    //   <img className="beer-image" src={beer_image} alt={beer_name} />
    //   <div className="beer-other-details">
    //     <h2 className="beer-name">{beer_name}</h2>
    //     <div className="beer-tagline">{beer_tagline}</div>
    //     <div className="beer-filters">
    //       <div className="beer-abv">ABV: {beer_abv}</div>
    //       <div className="beer-ph">ph: {beer_ph}</div>
    //       <div className="beer-first-brewed">
    //         First Brewed: {beer_first_brewed}
    //       </div>
    //     </div>
    //   </div>
    //   {showDetails ? detailsJSX : buttonJSX}
    // </div>
    <div className="beer-details">
      <img className="beer-image" src={beer_image} alt={beer_name} />
      <div className="beer-other-details">
        <h2 className="beer-name">{beer_name}</h2>
        <div className="beer-tagline">{beer_tagline}</div>
        <div className="beer-filters">
          <div className="beer-filters-title">
            <div className="beer-abv-title">ABV</div>
            <div className="beer-ph-title">ph</div>
            <div className="year-title">Year</div>
          </div>
          <div className="beer-filters-value">
            <div className="beer-abv-value value">{beer_abv}</div>
            <div className="beer-ph-value value">{beer_ph}</div>
            <div className="year-value value">
              {beer_first_brewed.substring(3, 7)}
            </div>
          </div>
        </div>
      </div>
      {showDetails ? detailsJSX : buttonJSX}
    </div>
  );
};

export default Card;
