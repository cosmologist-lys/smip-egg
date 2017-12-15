'use strict';

const Service = require('egg').Service;
const apiInfo = require('../utils/apiInfo');

class secUserService extends Service {
	async login(headers,api) {
		const result = await this.ctx.curl(api, {
			method: 'GET',
			contentType: 'json',
			headers: headers,
			dataType: 'json',
		});
		const json = apiInfo.getSysuser(result);
		console.log('service:'+json)
		return json;
	}

	async test() {
		return 'haha';
	}
}

module.exports = secUserService;