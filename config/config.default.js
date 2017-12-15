'use strict';

module.exports = appInfo => {
  const config = exports = {};

  config.keys = appInfo.name + '_cosmologist_kepler_lys_1989';

  // add your params here
  config.middleware = [];

	config.view = {
		defaultViewEngine: 'nunjucks',
		mapping: {
			'.j': 'nunjucks',
		},
	};
	config.session = {
		key: 'EGG-SESS',
		maxAge: 3600 * 1000,
		httpOnly: true,
		encrypt: true,
	};
	/*
	配置view的目录
	const path = require('path');
	params.view = {
		root: [
			path.join(appInfo.baseDir, 'app/view'),
			path.join(appInfo.baseDir, '/public/base'),
		].join(',')
	};*/
  return config;
};
