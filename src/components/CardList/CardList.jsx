import { useState } from "react";
import leftArrow from "../../assets/images/left-arrow.png"
import rightArrow from "../../assets/images/right-arrow.png"
import Card from "../Card/Card";
import "./CardList.scss";

const CardList = (props) => {
  const { beersArr } = props;
  const [counter, setCounter] = useState(0);
  const handleIncrement = () => {
    if (counter === beersArr.length - 1) {
      setCounter(0);
    } else {
      setCounter(counter + 1);
    }
  }
  const handleDecrement = () => {
    if (counter === 0) {
      setCounter(beersArr.length - 1);
    } else {
      setCounter(counter - 1);
    }
  }

  const beerJSX = beersArr.map((beer) => (
    <Card
      key={beer.id}
      beer_image={beer.image_url}
      beer_name={beer.name}
      beer_tagline={beer.tagline}
      beer_description={beer.description}
      beer_abv={beer.abv}
      beer_first_brewed={beer.first_brewed}
      beer_ph={beer.ph}
      beer_food_pairing={beer.food_pairing}
      beer_brewers_tips={beer.brewers_tips}
    />
  ));
  return <div className="beer-list">{beerJSX}</div>;
};
export default CardList;
