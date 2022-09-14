import { urlGetHeadquarters, urlPostHeadquarters } from '../../../../constants/backUrls';
import { handleResponse } from '../../../../helpers/commonFunctions';

const authHeader = {
    'Accept': 'application/json',
    'Content-type': 'application/json',
}

// Get
export const getHeadquarters = () => {
	const requestOptions = {
		method: 'GET',
		headers: authHeader,
	};

	return fetch(urlGetHeadquarters, requestOptions).then((response) => response.json());
};

// Post
export const createHeadquarter = (data) => {
	const requestOptions = {
		method: 'POST',
		headers: authHeader,
		body: data,
	};

	return fetch(urlPostHeadquarters, requestOptions).then(handleResponse);
};