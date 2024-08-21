import "../style/Cart.css"
import { useState, useEffect } from 'react'
import cart_logo from '../assets/cart.png'
import close from '../assets/close.svg'

function Cart({ cart, updateCart }) {
    const [isOpen, setIsOpen] = useState(false);

    const total = cart.reduce(
        (acc, plant) => acc + plant.price * plant.amount,
        0
    );

    useEffect(() => {
        document.title = `Cart : ${total}€`
    }, [total])

    return (
        <>
            <div className={`lmj-cart-popup ${isOpen ? 'open' : ''}`}>
                <div className='lmj-cart-popup-content'>
                    <button
                        className='lmj-cart-close-button'
                        onClick={() => setIsOpen(false)}
                    >
                        <img src={close} alt="close"></img>
                    </button>
                    <h2>Panier</h2>
                    <ul>
                        {cart.map(({ name, price, amount }, index) => (
							<div key={`${name}-${index}`} className="lmj-cart-list-item">
								<span className="lmj-cart-item-amount">{amount}</span>
								<span className="lmj-cart-item-name">{name}</span>
								<span className="lmj-cart-item-price">{price * amount}€</span>
							</div>
                        ))}
                    </ul>
					<h3 className="lmj-cart-item-total">
						Total : <div className="lmj-cart-item-total-price">{total}</div>€
					</h3>
					<button className="lmj-cart-clear-button" onClick={() => updateCart([])}>Vider le panier</button>
                </div>
            </div>
            {!isOpen && (
                <button
                    className='lmj-cart-toggle-button'
                    onClick={() => setIsOpen(true)}
                >
                    <img src={cart_logo} alt="cart"></img>
                </button>
            )}
        </>
    )
}

export default Cart