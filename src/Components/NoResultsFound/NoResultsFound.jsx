import React from 'react';
import { ConstantText } from '../../Constant/contstants';
import '../Header/header.css';
function NoResultsFound({ searchValue }) {
	let nameOrNumber = isNaN(searchValue) ? ' name ' : ' id ';
	return (
		<div style={{ gridColumnEnd: 'span 3', color: '#2e3156', fontWeight: '400', fontSize: '20px' }}>
			<p>
				&#128577;{ConstantText.NoResult} {nameOrNumber}
				<span style={{ fontWeight: 'bolder' }}>{searchValue}</span>
			</p>
		</div>
	);
}

export default NoResultsFound;
