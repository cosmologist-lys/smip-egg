const apiInfo = {
	/**
	 * 获取api返回json的状态信息
	 * 验证之后返回userjson
	 * @param result
	 * @returns {*}
	 */
	getSysuser : function (result) {
		if (result == null || result == undefined || result.toString().length == 0) {
			return {};
		} else {
			const json = {
				statusString:result.data.httpStatus || 'NOTFOUND',
				obj: result.data.targets,
				size: result.data.size
			}
			if (json.statusString === 'OK' && json.obj.toString().length>0)
				return {user:json.obj,valid:true}
			else
				return {user:json.obj,valid:false}

		}
	}
}

module.exports = apiInfo;