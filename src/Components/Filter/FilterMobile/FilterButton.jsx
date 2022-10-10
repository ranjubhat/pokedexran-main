import React from 'react';
import { ReactComponent as FilterIcon } from '../../../asset/Icons/filter_icon.svg';
import './css/filterMobileButton.css';
function FilterButton({ handleModal }) {
	return (
		<button onClick={handleModal} className="filterMobileButton" aria-label='filterButton'>
			<FilterIcon />
		</button>
	);
}

export default FilterButton;
