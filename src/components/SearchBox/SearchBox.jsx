import "./SearchBox.scss";

const SearchBox = (props) => {
  const { label, searchTerm, handleInput } = props;

  return (
    <form className="search-box">
      <label htmlFor={label} className="search-box__label"></label>
      <input
        type="text"
        name={label}
        value={searchTerm}
        onInput={handleInput}
        placeholder="Search..."
        className="search-box__input"
      />
    </form>
  );
};

export default SearchBox;