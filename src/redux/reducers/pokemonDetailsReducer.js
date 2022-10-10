import { LoadingIndicators } from '../../Constant/contstants';
import {
	FETCH_POKEMON_DETAILS,
	FETCH_POKEMON_DETAILS_SUCCESS,
	FETCH_POKEMON_DETAILS_FAILURE,
	CLEAR_POCKEMON_DETAILS,
	FETCH_POKEMON_DESCRIPTION,
	FETCH_POKEMON_DESCRIPTION_SUCCESS,
	FETCH_POKEMON_DESCRIPTION_FAILURE,
} from '../actionsContainer/actionTypes/pokemonDetailsActions.js';

const initialState = {
	pokemonDetailsLoading: LoadingIndicators.LOADING,
	pokemonDetailsResponse: {},
	pokemonDescription: {},
	error: '',
};

export const pokemonDetailsReducer = (state = initialState, action) => {
	switch (action.type) {
		case FETCH_POKEMON_DETAILS:
			return { ...state, pokemonDetailsLoading: LoadingIndicators.LOADING };
		case FETCH_POKEMON_DETAILS_SUCCESS:
			return {
				...state,
				pokemonDetailsResponse: { ...action.payload },

				pokemonDetailsLoading: LoadingIndicators.SUCCESS,
			};
		case FETCH_POKEMON_DETAILS_FAILURE:
			return {
				...state,
				pokemonDetailsResponse: {},
				error: action.payload,
				pokemonDescription: {},
				pokemonDetailsLoading: LoadingIndicators.FAILURE,
			};
		case FETCH_POKEMON_DESCRIPTION:
			return { ...state, pokemonDetailsLoading: LoadingIndicators.LOADING };
		case FETCH_POKEMON_DESCRIPTION_SUCCESS:
			return { ...state, pokemonDescription: { ...action.payload } };
		case FETCH_POKEMON_DESCRIPTION_FAILURE:
			return { ...state, pokemonDescription: {}, pokemonDetailsLoading: LoadingIndicators.FAILURE };
		case CLEAR_POCKEMON_DETAILS:
			return initialState;
		default:
			return state;
	}
};
