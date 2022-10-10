import { LoadingIndicators } from '../../Constant/contstants';
import {
	FETCH_GENDER_MASTERDATA,
	FETCH_GENDER_MASTERDATA_FAILURE,
	FETCH_GENDER_MASTERDATA_SUCCESS,
} from '../actionsContainer/actionTypes/genderDataActions';

const initialState = {
	loading: LoadingIndicators.LOADING,
	genderMasterData: {},
	genderMasterDataError: '',
};

export const genderMasterDataReducer = (state = initialState, action) => {
	switch (action.type) {
		case FETCH_GENDER_MASTERDATA:
			return { ...state, loading: LoadingIndicators.LOADING };
		case FETCH_GENDER_MASTERDATA_SUCCESS:
			return {
				...state,
				genderMasterData: formatGenderMasterData(action.payload),
				loading: LoadingIndicators.SUCCESS,
			};
		case FETCH_GENDER_MASTERDATA_FAILURE:
			return {
				...state,
				genderMasterData: {},
				genderMasterDataError: action.payload,
				loading: LoadingIndicators.FAILURE,
			};

		default:
			return state;
	}
};

export const formatGenderMasterData = (data) => {
	let formattedTypes = data?.reduce((finalResult, currentItem) => {
		let currentObject = {
			[currentItem.name]: currentItem?.pokemon_species_details?.map(
				(pokemonObject) => pokemonObject?.pokemon_species?.name,
			),
		};
		let arrayValue = { ...finalResult, ...currentObject };
		return arrayValue;
	}, {});
	return formattedTypes;
};
