import Sun from '../assets/sun.svg'
import Water from '../assets/water.svg'

function handleClick(scaleValue, careType) {
	const quantity = scaleValue === 1 ? 'low' : scaleValue === 2 ? 'moderate' : 'high';
	const type = careType === 'light' ? 'light' : 'water';
	alert(`This plant requires a ${quantity} quantity of ${type} to take care of it.`);

}

function CareScale({ scaleValue, careType }) {
	const range = [1, 2, 3]
	const scaleType =
		careType === 'light' ? (
			<img src={Sun} alt='sun-icon' />
		) : (
			<img src={Water} alt='water-icon' />
		)

	return (
		<div onClick={()=> handleClick(scaleValue, careType)}>
			{range.map((rangeElem) =>
				scaleValue >= rangeElem ? (
					<span key={rangeElem.toString()}>{scaleType}</span>
				) : null
			)}
		</div>
	)
}

export default CareScale