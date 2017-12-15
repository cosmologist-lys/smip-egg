'use strict';

const Controller = require('egg').Controller;
const api = require('../params/Api');
//const md5 = require('crypto').createHash('md5');

class HomeController extends Controller {


  async getLogin() {
  	let errmsg = '';
  	console.log(this.ctx.session.auth)
  	if (null != this.ctx.session.auth
	    && this.ctx.session.auth === false
            && this.ctx.session.sysuser == null)
  	    errmsg = 'ACCOUNT WRONG'
    return this.ctx.render('base/login.html',{errmsg:errmsg});
  }

  async postLogin() {
  	const ctx = this.ctx;
  	const json = await ctx.service.sys.secuser.login( {
	    alg: '1bc29b36f623ba82aaf6724fd3b16718',
	    username: ctx.request.body.username,
	    psw:require('crypto').createHash('md5')
		    .update(ctx.request.body.password)
		    .digest('hex')
    },api.sysuserUri+'/login');
  	const user = json.user;
  	ctx.session.auth = json.valid;
  	ctx.session.sysuser = user;
  	if (json.valid)
  	    return ctx.render('base/home.html',{user:user});
  	else
  		return ctx.redirect('/');
  }

  async test(){
    const data = {string:"petrichor"}
    return this.ctx.render('base/index.j',data);
  }
}

module.exports = HomeController;
