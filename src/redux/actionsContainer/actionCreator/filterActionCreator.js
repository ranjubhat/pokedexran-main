import {
	RESET_FILTER,
	SET_INITIAL_STATE_FILTER,
	UPDATE_FILTER,
} from '../actionTypes/filterActionTypes';

export const setInitialStateFilter = (filterType, filterList) => {
	return {
		type: SET_INITIAL_STATE_FILTER,
		payload: [filterType, filterList],
	};
};

export const updateFilter = (filterList) => {
	return {
		type: UPDATE_FILTER,
		payload: filterList,
	};
};

export const resetFilter = () => {
	return {
		type: RESET_FILTER,
	};
};
