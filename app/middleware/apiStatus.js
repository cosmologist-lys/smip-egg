module.exports = options => {
	return async function apiStatus(result) {

		if (result == null || result == undefined || result.toString().length == 0) {
			return {};
		} else if (result.request.url === '/'){
			return {};
		}
		else {
			return {
				statusString:result.data.httpStatus || 'NOTFOUND',
				statusCode: result.status,
				obj: result.data.targets,
				size: result.data.size
			}
		}
	};
};
