import React, { useEffect, useState } from 'react';
import Popover from '@mui/material/Popover';
import { useDispatch, useSelector } from 'react-redux';
import { getPokemonDetailsObject } from '../../redux/selector/pokemonDetailSelector';
import {
	clearPokemonDetails,
	fetchPokemonDescriptionApiCall,
	fetchPokemonDetailsApiCall,
} from '../../redux/actionsContainer/actionCreator/pokemonDetailsActionCreator.js';
import { getColorCode } from '../../Utilities/getColorCode';
import './css/pokemonDetails.css';

import { getTypesMasterData } from '../../redux/selector/typesMasterDataSelector';
import { getGenderMasterData } from '../../redux/selector/genderMasterDataSelector';

import {
	convertToThreeDigits,
	formatHeight,
	FormatPokemonDetails,
} from '../../Utilities/FormatData/formatdata';

import DetailsContainer from './DetailsContainer';
import DetailsBottomContainer from './DetailsBottomContainer/DetailsBottomContainer';

function PokemonDetails({ handleClose, id }) {
	const dispatch = useDispatch();
	const { damageMasterData } = useSelector(getTypesMasterData);
	const { pokemonDetailsResponse, pokemonDescription } = useSelector(getPokemonDetailsObject);
	const { genderMasterData } = useSelector(getGenderMasterData);

	const [pokeMonDetailsLocalState, setPokeMonDetailsLocalState] = useState([]);
	const [anchorElement, setAnchorElement] = useState(null);

	useEffect(() => {
		dispatch(fetchPokemonDetailsApiCall(id));
		dispatch(fetchPokemonDescriptionApiCall(id));
		return () => dispatch(clearPokemonDetails());
	}, []);

	useEffect(() => {
		setPokeMonDetailsLocalState(pokemonDetailsResponse);
	}, [pokemonDetailsResponse]);

	const handleReadMore = (event) => {
		setAnchorElement(event.currentTarget);
	};
	const handleClosePopOver = () => {
		setAnchorElement(null);
	};

	const open = Boolean(anchorElement);
	const popOverId = open ? 'simple-popover' : undefined;

	const height = formatHeight(pokeMonDetailsLocalState?.height) || 0;
	const weight = pokeMonDetailsLocalState?.weight / 10 || 0;
	const url = pokeMonDetailsLocalState?.sprites?.other?.dream_world?.front_default || '';

	const { weakness, description, genderData } = FormatPokemonDetails(
		genderMasterData,
		pokeMonDetailsLocalState?.name,
		pokeMonDetailsLocalState?.types,
		damageMasterData,
		pokemonDescription,
	);

	return (
		<div className="pokemonDetailsContainer">
			<Popover
				id={popOverId}
				open={open}
				anchorEl={anchorElement}
				onClose={handleClosePopOver}
				anchorOrigin={{
					vertical: 'center',
					horizontal: 'center',
				}}
				transformOrigin={{
					vertical: 'center',
					horizontal: 'center',
				}}
				sx={{ maxHeight: '500px', textAlign: 'center', maxWidth: '1000px' }}
				className="popover"
			>
				<div className="popOverContent">{description}</div>
			</Popover>
			<DetailsContainer
				title={pokeMonDetailsLocalState?.name}
				handleClose={handleClose}
				handleReadMore={handleReadMore}
				backgroundColor={getColorCode(pokeMonDetailsLocalState?.types || [])}
				imageUrl={url}
				description={description}
				idDisplay={convertToThreeDigits(pokeMonDetailsLocalState?.id)}
			/>
			<DetailsBottomContainer
				weakness={weakness}
				pokeMonDetailsLocalState={pokeMonDetailsLocalState}
				genderData={genderData}
				pokemonDescription={pokemonDescription}
				height={height}
				weight={weight}
			/>
		</div>
	);
}

export default PokemonDetails;
