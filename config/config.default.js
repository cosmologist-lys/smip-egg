'use strict';

module.exports = appInfo => {
  const config = exports = {};

  config.keys = appInfo.name + '_cosmologist_kepler_lys_1989';

  // add your params here
  config.middleware = [];

	config.view = {
		defaultViewEngine: 'nunjucks',
		mapping: {
			'.html': 'nunjucks',
		},
	};
	config.session = {
		key: 'EGG-SESS',
		maxAge: 3600 * 1000,
		httpOnly: true,
		encrypt: true,
	};
	exports.i18n = {
		defaultLocale: 'zh-CN',
		// URL 参数，默认 "locale"
		queryField: 'locale',
		// Cookie 记录的 key, 默认："locale"
		cookieField: 'locale',
		// Cookie 默认 `1y` 一年后过期， 如果设置为 Number，则单位为 ms
		cookieMaxAge: '1y',
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
