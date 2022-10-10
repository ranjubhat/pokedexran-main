import {
	FETCH_POKEMON_LIST,
	FETCH_POKEMON_LIST_FAILURE,
	FETCH_POKEMON_LIST_SUCCESS,
	SEARCH_POKEMON_LIST,
	UPDATE_POKEMON_LIST,
} from '../actionTypes/pokemonListActions.js';
import axios from 'axios';
import { Services } from '../../../Constant/contstants';

export const fetchPokemons = () => {
	return {
		type: FETCH_POKEMON_LIST,
	};
};

export const fetchPokemonListSuccess = (pokemons) => {
	return {
		type: FETCH_POKEMON_LIST_SUCCESS,
		payload: pokemons,
	};
};

export const fetchPokemonListFailure = (error) => {
	return {
		type: FETCH_POKEMON_LIST_FAILURE,
		payload: error,
	};
};

export const fetchPokemonsApiCall = () => {
	return (dispatch) => {
		dispatch(fetchPokemons);
		axios
			.get(Services.pokemonListAPI)
			.then((response) => {
				dispatch(fetchPokemonListSuccess(response.data));
			})
			.catch((error) => dispatch(fetchPokemonListFailure(error.message)));
	};
};

export const searchPokemonList = (searchValue) => {
	return {
		type: SEARCH_POKEMON_LIST,
		payload: searchValue,
	};
};

export const updatePokemonList = (pokemon) => {
	return {
		type: UPDATE_POKEMON_LIST,
		payload: pokemon,
	};
};
