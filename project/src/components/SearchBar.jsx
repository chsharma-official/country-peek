// SearchBar.jsx
// 1. accept query and onQueryChange as props
function SearchBar({ query, onQueryChange }) {
  return (
    // 2. render a div.search-bar containing a controlled input
    <div className="search-bar">
      <input
        type="text"
        value={query} // value bound to query
        onChange={(e) => onQueryChange(e.target.value)} // update via prop
        placeholder="Search for a country..."
        aria-label="Search for a country"
      />
    </div>
  );
}

export default SearchBar;
