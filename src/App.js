import React, { useState } from 'react';
import './App.css';
import Menu from './components/Menu';
import Data from './components/Data';
import Breakfast from './components/Breakfast';
import Lunch from './components/Lunch';
import Shakes from './components/Shakes';

function App() {
	const [list, setList] = useState(Data);
	const [active, setActive] = useState('All');

	const navLinks = [
		{
			name: 'All',
			id: 'All',
		},

		{
			name: 'Breakfast',
			id: 'Breakfast',
		},

		{
			name: 'Lunch',
			id: 'Lunch',
		},

		{
			name: 'Shakes',
			id: 'Shakes',
		},
	];

	const handleClick = (id) => {
		setActive(id);

		// USING IF CONDITIONALS

		// if (id === 'All') {
		// 	setList(Data);
		// } else if (id === 'Breakfast') {
		// 	setList(Breakfast);
		// } else if (id === 'Lunch') {
		// 	setList(Lunch);
		// } else if (id === 'Shakes') {
		// 	setList(Shakes);
		// }

		// USING TERNARY OPERATOR

		id === 'All'
			? setList(Data)
			: id === 'Breakfast'
			? setList(Breakfast)
			: id === 'Lunch'
			? setList(Lunch)
			: setList(Shakes);
	};

	const menuElement = list.map((item) => {
		return (
			<Menu
				key={item.id}
				image={item.image}
				name={item.name}
				price={item.price}
				info={item.info}
			/>
		);
	});

	return (
		<div className='container'>
			<div>
				<h2 className='hdn'>Our Menu</h2>
				<p className='hdn-bdr'> </p>
			</div>

			<div className='btn-list'>
				{/* <button onClick={() => setList(Data)}>All</button>
				<button onClick={() => setList(Breakfast)}>Breakfast</button>
				<button onClick={() => setList(Lunch)}>Lunch</button>
				<button onClick={() => setList(Shakes)}>Shakes</button> */}
				{navLinks.map(({ name, id }) => {
					return (
						<button
							className={active === id ? `active` : null}
							key={id}
							onClick={() => handleClick(id)}>
							{name}
						</button>
					);
				})}
			</div>
			<div className='lastdiv'>{menuElement}</div>
		</div>
	);
}

export default App;
