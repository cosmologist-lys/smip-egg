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

	async valid(ctx){
		let cb = '';
		if (ctx.session.succLogin == false){
			cb = 'Account Wrong!!!'
		}
		if (ctx.session.succLogin == undefined
				&& ctx.session.sysuser != null){
			cb = ''
		}
		if (ctx.session.auth == undefined
				&& ctx.session.sysuer != null)
			cb = ''
		return cb;
	}
}

module.exports = secUserService;