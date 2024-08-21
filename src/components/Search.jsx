import ShoppingList from "./ShoppingList";
import "../style/Search.css";

function Search({ search, setSearch }) {
    return (
        <div className="search-container">
            <p>Search by name</p>
            <input 
                className="search-input" 
                value={search} 
                onChange={(e) => setSearch(e.target.value)} 
                placeholder="Type to search..."
            />
            <button className="reset-button" onClick={() => setSearch('')}>Reset</button>
        </div>
    );
}

export default Search;