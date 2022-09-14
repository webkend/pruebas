import { urlGetInventory, urlPostInventory } from '../../../../constants/backUrls';
import { handleResponse } from '../../../../helpers/commonFunctions';

const authHeader = {
    'Accept': 'application/json',
    'Content-type': 'application/json',
}

// Get
export const getInventory = () => {
	const requestOptions = {
		method: 'GET',
		headers: authHeader,
	};

	return fetch(urlGetInventory, requestOptions).then(handleResponse);
};

// Post
export const createInventory = (data) => {
	const requestOptions = {
		method: 'POST',
		headers: authHeader,
		body: data,
	};

	return fetch(urlPostInventory, requestOptions).then(handleResponse);
};