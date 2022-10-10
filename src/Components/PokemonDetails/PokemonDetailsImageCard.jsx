import React from 'react';
import '../PokemonList/css/pokemonCard.css';
function PokemonDetailsImageCard({ backgroundColor, id, url }) {
	return (
		<div
			style={{
				backgroundImage: backgroundColor,
				backgroundColor: backgroundColor,
				justifySelf: 'flex-start',
				maxWidth: '200px', 
				width: '100%',
				cursor:"default"
			}}
			className="pokemonCard"
			id={id}
		>
			<img
				src={url}
				height="150px"
				width={'100%'}
				style={{ maxWidth: '150px', alignSelf: 'center', justifySelf: 'center' }}
				alt="Pokemon"
				loading="lazy"
				id={id}
			/>
		</div>
	);
}

export default PokemonDetailsImageCard;
