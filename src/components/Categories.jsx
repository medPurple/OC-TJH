import ShoppingList from "./ShoppingList";
import "../style/Categories.css";

function Categories({ activeCategory, setActiveCategory, categories }) {
    return (
        <div className="categories-container">
            <p>Filter by categories</p>
            <select 
                className="categories-select"
                value={activeCategory}
                onChange={(e) => setActiveCategory(e.target.value)}
            >
                <option value="">All</option>
                {categories.map((category) => (
                    <option key={category} value={category}>
                        {category}
                    </option>
                ))}
            </select>
            <button className="reset-button" onClick={() => setActiveCategory('')}>Reset</button>
        </div>
    );
}


export default Categories;