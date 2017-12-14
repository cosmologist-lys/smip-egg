'use strict';

const Controller = require('egg').Controller;
const api = require('../params/Api');
const md5 = require('crypto').createHash('md5');
const apiInfo = require('../utils/apiInfo');


class HomeController extends Controller {


  async getLogin() {
    return this.ctx.render('base/login.html');
  }

  async postLogin() {
  	const username = this.ctx.request.body.username,
	    password = this.ctx.request.body.password;
  	const result = await this.ctx.curl(api.sysuserUri+'login', {
		  method: 'GET',
		  contentType: 'json',
		  headers: {
			  username: username,
			  psw:md5.update(password).digest('hex')
		  },
		  dataType: 'json',
	  });
  	console.log(result)
  	const json = apiInfo.getJson(result);
  	console.log(json.obj);
  	console.log(json.statusCode);
  	console.log(json.statusString);

  }

  async test(){
    const data = {string:"petrichor"}
    return this.ctx.render('base/index.j',data);
  }
}

module.exports = HomeController;
