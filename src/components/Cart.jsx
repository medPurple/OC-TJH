import "../style/Cart.css"
import { useState, useEffect} from 'react'
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


    return isOpen ? (
		<div className='lmj-cart'>
			<div className='lmj-cart-popup'>
			<div className='lmj-cart-popup-content'>
			<button
				className='lmj-cart-close-button'
				onClick={() => setIsOpen(false)}
			>
				<img src={close} alt="close"></img>
			</button>
			<h2>Panier</h2>
			<ul>
				{cart.map(({ name, price, amount}, index) => (
					<div key={`${name}-${index}`}>
						{name}	{amount} x {price}€
					</div>
				))}
			</ul>
			<h3>Total : {total}€</h3>
			<button onClick={() => updateCart([])}>Vider le panier</button>
			</div>
			</div>
		</div>
	) : (
		<div className='lmj-cart-closed'>
			<button
				className='lmj-cart-toggle-button'
				onClick={() => setIsOpen(true)}
			>
				<img src={cart_logo} alt="cart"></img>
			</button>
		</div>
	)
}
    
export default Cart
