import { LoadingIndicators } from '../../Constant/contstants';
import { convertToThreeDigits } from '../../Utilities/FormatData/formatdata';
import {
	FETCH_POKEMON_LIST,
	FETCH_POKEMON_LIST_SUCCESS,
	FETCH_POKEMON_LIST_FAILURE,
	SEARCH_POKEMON_LIST,
	UPDATE_POKEMON_LIST,
} from '../actionsContainer/actionTypes/pokemonListActions.js';

const initialState = {
	loading: LoadingIndicators.LOADING,
	pokemonListResponse: {},
	pokemonListError: '',
	pokemonListSearchResults: [],
	searchValue: '',
};
export const pokemonListReducer = (state = initialState, action) => {
	switch (action.type) {
		case FETCH_POKEMON_LIST:
			return {
				...state,
				loading: LoadingIndicators.LOADING,
				pokemonListSearchResults: [],
				searchValue: '',
			};
		case FETCH_POKEMON_LIST_SUCCESS:
			return {
				...state,
				pokemonListResponse: action.payload,
				loading: LoadingIndicators.SUCCESS,
				pokemonListSearchResults: [],
				searchLength: '',
			};
		case FETCH_POKEMON_LIST_FAILURE:
			return {
				...state,
				pokemonListResponse: {},
				pokemonListError: action.payload,
				loading: LoadingIndicators.FAILURE,
				pokemonListSearchResults: [],
				searchLength: '',
			};
		case SEARCH_POKEMON_LIST:
			return {
				...state,
				pokemonListSearchResults: pokemonListSearch(
					action.payload,
					state.pokemonListResponse?.results,
				),
				searchValue: action.payload,
			};
		case UPDATE_POKEMON_LIST:
			return {
				...state,
				pokemonListResponse: {
					...state.pokemonListResponse,
					results: updatePokemonResponse(action.payload, state.pokemonListResponse?.results),
				},
			};

		default:
			return state;
	}
};

const pokemonListSearch = (searchValue, masterData) => {
	// eslint-disable-next-line
	let filteredPokemons = masterData.filter((pokemon) => {
		if (
			pokemon.name?.toLowerCase()?.includes(searchValue.toLowerCase()) ||
			pokemon.id?.toString()?.includes(searchValue) ||
			convertToThreeDigits(pokemon?.id)?.includes(searchValue)
		) {
			return pokemon;
		}
	});
	return filteredPokemons;
};

const updatePokemonResponse = (pokemon, pokemonList) => {
	let localList = [...pokemonList];
	let index = pokemonList?.findIndex((item) => item?.name === pokemon?.name);
	if (index !== -1) {
		localList[index] = pokemon;
	}
	return localList;
};
