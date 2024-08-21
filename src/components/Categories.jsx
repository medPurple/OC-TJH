import ShoppingList from "./ShoppingList";
import "../style/Categories.css";

function Categories({ categories, activeCategory, setActiveCategory }) {
    return (
        <div>
            <p>Filter by categories</p>
            <select 
                value={activeCategory}
                onChange={(e) => setActiveCategory(e.target.value)}>
                <option value=""></option>
                {categories.map((category) => (
                    <option key={category} value={category}>
                        {category}
                    </option>
                ))}
                </select>
                <button onClick={() => setActiveCategory('')}>Reset</button>
        </div>
    )
}

export default Categories;