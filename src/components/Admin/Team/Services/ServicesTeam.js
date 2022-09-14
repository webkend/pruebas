import { urlGetTeam, urlPostTeam } from '../../../../constants/backUrls';
import { handleResponse } from '../../../../helpers/commonFunctions';

const authHeader = {
    'Accept': 'application/json',
    'Content-type': 'application/json',
	// // 'Content-Type': 'multipart/form-data'
	// 'Content-Type': 'application/x-www-form-urlencoded'
	
}

// Get
export const getTeam = () => {
	const requestOptions = {
		method: 'GET',
		headers: authHeader,
	};

	return fetch(urlGetTeam, requestOptions).then((response) => response.json());
};

// Post
export const createTeam = (data) => {
	const requestOptions = {
		method: 'POST',
		headers: authHeader,
		body: data,
	};

	return fetch(urlPostTeam, requestOptions).then(handleResponse);
};