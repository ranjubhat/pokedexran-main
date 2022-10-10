import axios from 'axios';
import { Services } from '../../../Constant/contstants';
import {
	FETCH_TYPES_MASTERDATA,
	FETCH_TYPES_MASTERDATA_FAILURE,
	FETCH_TYPES_MASTERDATA_SUCCESS,
} from '../actionTypes/typesMasterData';
import { setInitialStateFilter} from './filterActionCreator';

export const fetchTypesMasterData = () => {
	return {
		type: FETCH_TYPES_MASTERDATA,
	};
};

export const fetchTypesMasterDataSuccess = (typesData) => {
	return {
		type: FETCH_TYPES_MASTERDATA_SUCCESS,
		payload: typesData,
	};
};

export const fetchTypesMasterDataFailure = (error) => {
	return {
		type: FETCH_TYPES_MASTERDATA_FAILURE,
		payload: error,
	};
};

export const fetchTypesMasterDataApiCall = () => {
	return (dispatch) => {
		dispatch(fetchTypesMasterData);

		axios
			.get(Services.typesMasterDataAPI)
			.then((response) => {
				let apiPromise = [];
				let types = [];
				response.data.results.forEach((item) => {
					types = [...types, item.name];
					apiPromise = [...apiPromise, axios.get(item.url)];
				});
				dispatch(setInitialStateFilter('Type', types));
				Promise.all([...apiPromise])
					.then((promiseResponse) => {
						let data = promiseResponse.map((item) => item.data);
						dispatch(fetchTypesMasterDataSuccess([...data]));
					})
					.catch((error) => {
						dispatch(fetchTypesMasterDataFailure(error.message));
					});
			})
			.catch((error) => {
				dispatch(fetchTypesMasterDataFailure(error.message));
			});
	};
};
