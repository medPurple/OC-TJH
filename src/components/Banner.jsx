import "../style/Banner.css"
import Cart from './Cart'
import App from'./App'

function Banner({ children, cart, updateCart }) {
	return <div className='lmj-banner'>
				<div className='lmj-banner-title'>
				{children}
			</div>
            <div className='lmj-banner-cart'>
                <Cart cart={cart} updateCart={updateCart} />
            </div>
		</div>
}

export default Banner