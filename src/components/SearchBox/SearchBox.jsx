import "./SearchBox.scss";

const SearchBox = (props) => {
  const { searchTerm, handleInput } = props;

  return (
    <form className="search-box">

      <input
        type="text"
        value={searchTerm}
        onInput={handleInput}
        placeholder="Search beer name..."
        className="search-box__input"
      />
    </form>
  );
};

export default SearchBox;