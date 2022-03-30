import React from 'react';
import './Menu.css';

function Menu(props) {
	return (
		<div className='mealList'>
			<div className='imgWrap'>
				<img src={props.image} alt={props.name} className='pic' />
			</div>
			<div className='desc'>
				<div className='namPri'>
					<h4>{props.name}</h4>
					<h4 className='pri'>$ {props.price}</h4>
				</div>
				<div className='mealInfo'>
					<p>{props.info}</p>
				</div>
			</div>
		</div>
	);
}

export default Menu;

// USING DESTRUCTURING METHOD

// function Menu({ image, name, price, info }) {
// 	return (
// 			<div className='mealList'>
// 			<img src={image} alt={name} className='pic' />
// 			<div className='desc'>
// 				<div className='namPri'>
// 					<h4>{name}</h4>
// 					<h4 className='pri'>$ {price}</h4>
// 				</div>
// 				<div className='mealInfo'>
// 					<p>{info}</p>
// 				</div>
// 			</div>
// 		</div>
// 	);
// }
