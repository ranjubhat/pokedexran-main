import React from 'react';
import { ConstantText } from '../../Constant/contstants';
import './header.css';
const Header = (props) => {
	return (
		<div className="headingContainer">
			<h1 className="header">{ConstantText.Pokedex}</h1>
			<div className="headingLine"></div>
			<p
				style={{ marginBottom: '30px', color: 'rgb(93,95,124)', textAlign: 'start' }}
				className="subHeading"
			>
				{ConstantText.SubHeading}
			</p>
		</div>
	);
};
export default Header;
