import axios from 'axios';
export const fetchAPI = (api) => {
	axios
		.get(api)
		.then((response) => {
			return response.data;
		})
		.catch((error) => {
			return error;
		});
};
