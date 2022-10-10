import React from 'react';
import './Chip.css';
const Chip = ({ backgroundColor, content }) => {
	return (
		<div
			style={{
				backgroundColor: backgroundColor,
			}}
			className="chip"
		>
			{content}
		</div>
	);
};

export default Chip;
