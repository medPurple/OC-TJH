import '../style/Layout.css';
import Banner from './Banner'
import Cart from './Cart'
import Footer from './Footer'
import ShoppingList from './ShoppingList';
import logo from "../assets/leaf.png";
import { useEffect, useState } from 'react'

function App() {
	const savedCart = localStorage.getItem('cart');
	const [cart, updateCart] = useState(savedCart ? JSON.parse(savedCart) : []);

	useEffect(() => {
		localStorage.setItem('cart', JSON.stringify(cart));
	}, [cart]);

	return (
		<div>
			<Banner cart={cart} updateCart={updateCart}>
			<div className='lmj-banner-left'>
				<img src={logo} alt='The Jungle House' className='lmj-logo' />
				<h1 className='lmj-title'>The Jungle House</h1>
			</div>
			</Banner>
            <div className='lmj-layout-inner'>
                <ShoppingList cart={cart} updateCart={updateCart} />
			</div>
			<Footer />
		</div>
	)
}

export default App