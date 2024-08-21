import "../style/ShoppingList.css"
import plantList from "../datas/plantList.jsx"
import CareScale from "./CareScale.jsx"
import PlantItem from "./PlantItem.jsx"
import { useState } from "react"
import Categories from "./Categories.jsx"
import Search from "./Search.jsx"

function ShoppingList({ cart, updateCart }) {

	const [activeCategory, setActiveCategory] = useState('')
	const [search, setSearch] = useState('');
    let hasResults = false;
    
    const categories = plantList.reduce(
		(acc, plant) =>
			acc.includes(plant.category) ? acc : acc.concat(plant.category),
		[]
	)

    function addToCart(name, price) {
        const currentPlantAdded = cart.find((plant) => plant.name === name);
        if (currentPlantAdded) {
            const cartFilteredCurrentPlant = cart.filter(
                (plant) => plant.name !== name
            );
            updateCart([
                ...cartFilteredCurrentPlant,
                { name, price, amount: currentPlantAdded.amount + 1 },
            ]);
        } else {
            updateCart([...cart, { name, price, amount: 1 }]);
        }

    }
    return (<div className="lmj-shopping-list">
        <div className="lmj-options">
            <Search search={search} setSearch={setSearch} />
            <Categories
                categories={categories}
                activeCategory={activeCategory}
                setActiveCategory={setActiveCategory}
            />
        </div>
        <ul className='lmj-plant-list'>
            {plantList.map(({id, cover, name, water, light, isBestSale, isSpecialOffer, price}) => (
                (!activeCategory || activeCategory === name)  && (!search || name.toLowerCase().includes(search.toLowerCase())) ? (
                    hasResults = true,
                    <div key={id} className="lmj-plant-item-container">
                        <PlantItem
                                key={id}
                                id={id}
                                cover={cover}
                                name={name}
                                water={water}
                                light={light}
                                isBestSale={isBestSale}
                                isSpecialOffer={isSpecialOffer}
                                price={price}
                            />
                            <button onClick={() => addToCart(name, price)}>Ajouter</button>
                    </div>
                ) : null
                ))}
                {!hasResults && <p>No plants match with your criteria</p>}
        </ul>
    </div>)
}
export default ShoppingList