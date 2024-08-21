import CareScale from "./CareScale";
import '../style/PlantItem.css';

function PlantItem({ id, cover, name, water, light, price, isBestSale, isSpecialOffer }) {
    return (
        <li key={id} className='lmj-plant-item'>
            <div className='lmj-plant-item-image-container'>
                {isSpecialOffer && <div className='lmj-plant-item-special-offer'>Soldes</div>}
                <img className='lmj-plant-item-cover' src={cover} alt={`${name} cover`} />
            </div>
            <div className="lmj-plant-item-name">
                <span>{name}</span>
                {/* {isBestSale && <span>{name} 🔥</span>} */}
                {/* {!isBestSale && <span>{name}</span>} */}
                <div>{price}€</div>
                </div>
            {/* <div className="carescale_item">
                <p>Care informations</p>
                <CareScale careType='water' scaleValue={water} />
                <CareScale careType='light' scaleValue={light} />
            </div> */}
        </li>
    )
}

export default PlantItem;
