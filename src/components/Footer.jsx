import { useState } from 'react'
import '../style/Footer.css'



function Footer() {
	const [inputValue, setInputValue] = useState('');
	
	function handleBlur() {
		if (!inputValue.includes('@' && '.')) {
			alert("Attention, ceci n'est pas une adresse valide 😥");
		}
	}
	
	function handleInput(e) {
		setInputValue(e.target.value);
	}

	return (
		<footer className='lmj-footer'>
			<div className='lmj-footer-elem'>
				Pour les passionné·e·s de plantes 🌿🌱🌵
			</div>
			<div className='lmj-footer-elem'>Laissez-nous votre mail :</div>
			<input onChange={handleInput} value={inputValue} onBlur={handleBlur}/>
		</footer>
	)
}

export default Footer