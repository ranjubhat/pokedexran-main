import React from 'react';
import { ReactComponent as CloseIcon } from '../../asset/Icons/closeIcon.svg';
import './css/pokemonDetailsHeader.css';
import useBreakpoint from '../../Utilities/CustomHooks/useBreakPoint';
function DetailsHeader({ title, handleClose, idDisplay }) {
	const { width } = useBreakpoint();

	return (
		<>
			{width <= 800 ? (
				<div className="mobileHeading">
					<div className="mobileHeadingCloseContainer">
						<h2 className="title">{title?.toUpperCase()}</h2>
						<button className="buttonStyle" onClick={handleClose}>
							<CloseIcon />
						</button>
					</div>
					<p className="detailsId">{idDisplay}</p>
				</div>
			) : (
				<div className="deskTopHeading">
					<div className="detailsHeader">
						<h2 className="title">{title?.toUpperCase()}</h2>
						<div className="idContainer">
							<div className="verticalLineDetails"></div>
							<p className="detailsId">{idDisplay}</p>
							<div className="verticalLineDetails"></div>
						</div>
						<div>
							<button className="buttonStyle" onClick={handleClose}>
								<CloseIcon />
							</button>
						</div>
					</div>
				</div>
			)}
		</>
	);
}

export default DetailsHeader;
