import React from 'react';
import './css/filterLabel.css';
function FilterLabel({ filterState, filterType }) {
	let firstCheckbox = (filterState[filterType] && filterState[filterType][0]) || '';
	if (filterState[filterType]?.length === 0) return null;
	if (filterState[filterType]?.length === 1)
		return <p className="filterLabel">{firstCheckbox}</p>;
	else {
		if (filterState[filterType]?.length > 1) {
			return (
				<div className="filterLabel">
					{firstCheckbox} +{' '}
					<span style={{ fontWeight: '700' }}>{filterState[filterType]?.length - 1} More</span>
				</div>
			);
		} else return null;
	}
}

export default FilterLabel;
