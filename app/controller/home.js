'use strict';

const Controller = require('egg').Controller;
const api = require('../params/Api');
//const md5 = require('crypto').createHash('md5');

class HomeController extends Controller {
	/**
	 * login.html get
	 * @returns {Promise.<*>}
	 */
  async getLogin() {
  	const ctx = this.ctx,
  	     errmsg = await ctx.service.sys.secuser.valid(ctx);
  	delete ctx.session.succLogin;
    return ctx.render('base/login.html',{errmsg:errmsg});
  }

	/**
	 * login.html post
	 * @returns {Promise.<*>}
	 */
  async postLogin() {
  	const ctx = this.ctx,
  	     json = await ctx.service.sys.secuser.login( {
	    alg : '1bc29b36f623ba82aaf6724fd3b16718',
	    username : ctx.request.body.username,
	    psw : require('crypto').createHash('md5')
		    .update(ctx.request.body.password)
		    .digest('hex')
    },api.sysuserUri+'/login');
  	ctx.session.auth = json.valid;ctx.session.sysuser = json.user;
  	if (json.valid){
	    ctx.session.succLogin = true;
	    return ctx.render('base/home.html',{user:json.user});
    } else{
	    ctx.session.succLogin = false;
	    return ctx.redirect('/');
    }
  }

  async home(){
  	return this.ctx.render('/base/index.html');
  }
}

module.exports = HomeController;
