import axios from 'axios';
import { Services } from '../../../Constant/contstants';
import {
	FETCH_POKEMON_DETAILS,
	FETCH_POKEMON_DETAILS_SUCCESS,
	FETCH_POKEMON_DETAILS_FAILURE,
	CLEAR_POCKEMON_DETAILS,
	FETCH_POKEMON_DESCRIPTION,
	FETCH_POKEMON_DESCRIPTION_SUCCESS,
	FETCH_POKEMON_DESCRIPTION_FAILURE,
} from '../actionTypes/pokemonDetailsActions';

export const fetchPokemonDetails = () => {
	return {
		type: FETCH_POKEMON_DETAILS,
	};
};

export const fetchPokemonDetailsSuccess = (pokemonData) => {
	return {
		type: FETCH_POKEMON_DETAILS_SUCCESS,
		payload: pokemonData,
	};
};

export const fetchPokemonDetailsFailure = (error) => {
	return {
		type: FETCH_POKEMON_DETAILS_FAILURE,
		payload: error,
	};
};

export const fetchPokemonDescription = () => {
	return {
		type: FETCH_POKEMON_DESCRIPTION,
	};
};

export const fetchPokemonDescriptionSuccess = (pokemonDescription) => {
	return {
		type: FETCH_POKEMON_DESCRIPTION_SUCCESS,
		payload: pokemonDescription,
	};
};

export const fetchPokemonDescriptionFailure = (error) => {
	return {
		type: FETCH_POKEMON_DESCRIPTION_FAILURE,
		payload: error,
	};
};

export const fetchPokemonDetailsApiCall = (id, isSearch) => {
	return (dispatch) => {
		dispatch(fetchPokemonDetails);
		axios
			.get(Services.pokemonDetailsAPI + id)
			.then((response) => {
				dispatch(fetchPokemonDetailsSuccess(response.data));
			})
			.catch((error) => dispatch(fetchPokemonDetailsFailure(error.message)));
	};
};

export const fetchPokemonDescriptionApiCall = (id) => {
	return (dispatch) => {
		dispatch(fetchPokemonDescription);

		axios
			.get(Services.pokemonDescriptionAPI + id)
			.then((response) => {
				dispatch(fetchPokemonDescriptionSuccess(response.data));
			})
			.catch((error) => dispatch(fetchPokemonDescriptionFailure(error.message)));
	};
};

export const clearPokemonDetails = () => {
	return {
		type: CLEAR_POCKEMON_DETAILS,
	};
};
