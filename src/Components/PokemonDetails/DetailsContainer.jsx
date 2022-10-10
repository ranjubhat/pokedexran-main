import React from 'react';
import PokemonDetailsImageCard from './PokemonDetailsImageCard';

import DetailsHeader from './DetailsHeader';
import Description from './Description';
import './css/pokemonDetailsContainer.css';
import useBreakpoint from '../../Utilities/CustomHooks/useBreakPoint';
function DetailsContainer({
	title,
	handleClose,
	imageUrl,
	backgroundColor,
	description,
	id,
	handleReadMore,
	idDisplay,
}) {

	const {width}=useBreakpoint();
	return (
		<>

			{width<=800&&(<DetailsHeader title={title} handleClose={handleClose} idDisplay={idDisplay} />)}
			<div className="pokemonDetailsContainer2">
				<PokemonDetailsImageCard backgroundColor={backgroundColor} url={imageUrl} />
				<div>
				{width>800&&(<DetailsHeader title={title} handleClose={handleClose} idDisplay={idDisplay} />)}
					<Description handleReadMore={handleReadMore} id={id} description={description} />
				</div>
			</div>
		</>
	);
}

export default DetailsContainer;
