import React, { useEffect, useState } from 'react';
import './css/pokemonCard.css';
import axios from 'axios';
import { convertToThreeDigits } from '../../Utilities/FormatData/formatdata.js';
import { getColorCode } from '../../Utilities/getColorCode';
import CustomModal from '../Modal/Modal'
import { useDispatch } from 'react-redux';
import { updatePokemonList } from '../../redux/actionsContainer/actionCreator/pokemonListActionCreator';

function PokemonCard(props) {
	const { name, id, types, sprites } = props?.pokemon;
	const dispatch = useDispatch();

	const [localPokemonState, setLocalPokemonState] = useState({});
	
	useEffect(() => {
		if (props?.pokemonDetailsUrl) {
		axios
			.get(props?.pokemonDetailsUrl)
			.then((details) => {
				dispatch(updatePokemonList(details?.data));
				setLocalPokemonState(details?.data || {});
			})
			.catch((error) => {
				setLocalPokemonState({});
			});
		}
		// eslint-disable-next-line
	}, [props?.pokemonDetailsUrl]);

	const imageUrl =
		sprites?.other?.dream_world?.front_default ||
		localPokemonState.sprites?.other?.dream_world?.front_default;
	const [open, setOpen] = useState('');

	const localType = types || localPokemonState?.types;
	const backGroundStyle = {
		backgroundColor: localType?.length === 1 && getColorCode(localType),
		backgroundImage: localType?.length > 1 ? getColorCode(localType) : null,
	};
	const pokeMonIdDisplay = convertToThreeDigits(id || localPokemonState?.id);
	return (
		<div
			style={backGroundStyle}
			className="pokemonCard"
			onClick={(event) => {
				if (!open) setOpen(event.target.id);
			}}
			id={id || localPokemonState?.id}
		>
			<img
				src={imageUrl}
				height="150px"
				width={'100%'}
				style={{ maxWidth: '150px', alignSelf: 'center', justifySelf: 'center' }}
				alt="Pokemon"
				loading="lazy"
				id={id || localPokemonState?.id}
			/>

			<>
				<p className="pokemonLabel">{name}</p>
				<p className='pokemonId'>{pokeMonIdDisplay || 0}</p>
				<CustomModal open={open} setOpen={setOpen} />
			</>
		</div>
	);
}

export default PokemonCard;
