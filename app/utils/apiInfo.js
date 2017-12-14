const apiInfo = {
	getJson: function (result) {
		if (result == null || result == undefined || result.toString().length == 0) {
			return {};
		} else {
			return {
				statusString:result.data.httpStatus || 'NOTFOUND',
				statusCode: result.status,
				obj: result.data.targets,
				size: result.data.size
			}
		}
	}
}

module.exports = apiInfo;