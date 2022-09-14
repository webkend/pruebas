import { urlGetThirds, urlPostThirds } from '../../../../constants/backUrls';
import { handleResponse } from '../../../../helpers/commonFunctions';

const authHeader = {
    'Accept': 'application/json',
    'Content-type': 'application/json',
}

// Get
export const getThirds = () => {
	const requestOptions = {
		method: 'GET',
		headers: authHeader,
	};

	return fetch(urlGetThirds, requestOptions).then(handleResponse);
};

// Post
export const createThird = (data) => {
	const requestOptions = {
		method: 'POST',
		headers: authHeader,
		body: data,
	};

	return fetch(urlPostThirds, requestOptions).then(handleResponse);
};