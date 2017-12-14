module.exports = options => {
	return async function apiStatus(result) {
		console.error(result)
		if (result == null || result.toString().length == 0) {
			return {};
		}else{
		result = result.data;
		//const statusString = result.httpStatus || 'NOTFOUND';
		const obj = result.targets;
		const size = result.size;
		const statusCode = result.status;
		return {
			//statusString:statusString,
			statusCode:statusCode,
			obj:obj,
			size:size
		}}
	};
};