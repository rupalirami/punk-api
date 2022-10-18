import "./CardList.scss";

const CardList = (props) => {
  const { beersArr } = props;

  const beerJSX = beersArr.map((beer) => (
    <div className="beer-list__details" key={beer.id} >
      <img 
        className="beer-img"
        src={beer.image_url}
        alt={beer.tagline}
      />
      <h2 className="beer-name">{beer.name}</h2>
      <div className="beer-description">{beer.description}</div>
    </div>
  ));

//   const  teamJSX = props.teamArr.map(team => 
//     <div className="card-details">
//        <div className="card-details__name">{team.name}</div>
//        <div className="card-details__role">{team.role}</div>  
//        <div className="counter" key={team.id}> 
//           <h4 className="counter__heading">Counter</h4>
//           <Counter />
//        </div>
//     </div>
//   );
  return (
    <>
      <div className="beer-list">{beerJSX}</div>
    </>
  );
};

export default CardList;