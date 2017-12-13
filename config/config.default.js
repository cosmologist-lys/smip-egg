'use strict';

module.exports = appInfo => {
  const config = exports = {};

  // use for cookie sign key, should change to your own and keep security
  config.keys = appInfo.name + '_cosmologist_kepler_lys_1989';

  // add your config here
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

  return config;
};
