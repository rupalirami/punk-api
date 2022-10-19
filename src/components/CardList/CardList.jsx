import Card from "../Card/Card"
import "./CardList.scss";

const CardList = (props) => {
  const { beersArr } = props;
  const beerJSX = beersArr.map((beer) => (
      <Card 
          beer_image={beer.image_url} 
          beer_name={beer.name} 
          beer_tagline={beer.tagline} 
          beer_description={beer.description} 
          key={beer.id}
      />
  ));
  console.log(beerJSX)
  return (
      <div className="beer-list">{beerJSX}</div>
  );
};

export default CardList;