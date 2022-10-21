import Card from "../Card/Card"
import "./CardList.scss";

const CardList = (props) => {
  const { beersArr } = props;
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
      />
  ));
  return (
      <div className="beer-list">{beerJSX}</div>
  );
};
// beer_description={beer.description} 
export default CardList;
