export const handleResponse = (response) => {
	return response.json().then((data) => {
		if (!response.ok) {
			console.log('!response.ok', response.ok);
			if (response.status === 401) {
			}
			let error = (data && (data.error || data.message));
			if (response.status === 404) {
				error = 'NOT_FOUND';
			}
			return Promise.reject(data.error_type ? data : error);
		}
		console.log('response.ok', response.ok);
		return data;
	});
};