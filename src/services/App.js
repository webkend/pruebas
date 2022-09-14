import * as api from './../constants/backUrls';
import Loading from '../components/Utils/Loading';

const authHeader = {
    'Accept': 'application/json',
    'Content-type': 'application/json',
}

// API´S Headquarters (Sedes)
export const getRoles = () => {
	const requestOptions = {
		method: 'GET',
		headers: authHeader,
	};

	return fetch(api.urlGetRoles, requestOptions).then((response) => response.json());
};

// API´S Headquarters (Sedes)
export const getHeadquarters = () => {
	<Loading />

	const requestOptions = {
		method: 'GET',
		headers: authHeader,
	};

	return fetch(api.urlGetHeadquarters, requestOptions).then((response) => response.json());
};

// API´S Users (Usuarios)

// API´S Products (Productos)

// API´S Thirds (Terceros)
export const getThirds = () => {
	const requestOptions = {
		method: 'GET',
		headers: authHeader,
	};

	return fetch(api.urlGetThirds, requestOptions).then((response) => response.json());
};