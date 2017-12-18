'use strict';

/**
 * @param {Egg.Application} app - egg application
 * 路由总分发
 * router.verb('pathname','pathmatch',controller.action)
 */
module.exports = app => {
  const { router, controller } = app;


  router.get('/', controller.home.getLogin);
  router.post('/', controller.home.postLogin);

  router.get('/home',controller.home.home);
};
