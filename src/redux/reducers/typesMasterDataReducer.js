import { LoadingIndicators } from '../../Constant/contstants';
import {
	FETCH_TYPES_MASTERDATA,
	FETCH_TYPES_MASTERDATA_FAILURE,
	FETCH_TYPES_MASTERDATA_SUCCESS,
} from '../actionsContainer/actionTypes/typesMasterData';

const initialState = {
	typesLoading: LoadingIndicators.LOADING,
	typesMasterData: {},
	typesMasterDataError: '',
	damageMasterData: {},
};

export const typesMasterDataReducer = (state = initialState, action) => {
	switch (action.type) {
		case FETCH_TYPES_MASTERDATA:
			return { ...state, typesLoading: LoadingIndicators.LOADING };
		case FETCH_TYPES_MASTERDATA_SUCCESS:
			return {
				...state,
				damageMasterData: getDamages2(action.payload),
				damageMasterData2: getDamages2(action.payload),
				typesLoading: LoadingIndicators.SUCCESS,
				typesMasterData: formatTypesMasterData(action.payload),
			};
		case FETCH_TYPES_MASTERDATA_FAILURE:
			return {
				...state,
				typesMasterData: {},
				typesMasterDataError: action.payload,
				typesLoading: LoadingIndicators.FAILURE,
			};

		default:
			return state;
	}
};

export const getDamages = (data) => {
	let damages = data?.reduce((finalResult, currentItem) => {
		let currentObject = {
			[currentItem.name]: [
				...currentItem?.damage_relations['double_damage_from']?.map(
					(doubleDamage) => doubleDamage.name,
				),
			],
		};
		let arrayValue = [...finalResult, currentObject];
		return arrayValue;
	}, []);
	return damages;
};

export const getDamages2 = (data) => {
	let damages = data?.reduce((finalResult, currentItem) => {
		let currentObject = {
			[currentItem.name]: [
				...currentItem?.damage_relations['double_damage_from']?.map(
					(doubleDamage) => doubleDamage.name,
				),
			],
		};
		finalResult = { ...finalResult, ...currentObject };
		return finalResult;
	}, {});
	return damages;
};

export const formatTypesMasterData = (data) => {
	let formattedTypes = data?.reduce((finalResult, currentItem) => {
		let currentObject = {
			[currentItem.name]: currentItem?.pokemon?.map(
				(pokemonObject) => pokemonObject?.pokemon?.name,
			),
		};
		let arrayValue = { ...finalResult, ...currentObject };
		return arrayValue;
	}, {});

	return formattedTypes;
};
