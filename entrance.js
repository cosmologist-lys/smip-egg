'use strict';

/**
 * idea入口文件。仅在编译器运行时有用。
 * npm run dev并不读取此端口配置
 * 而是直接通过package.json.scripts.dev的配置来运行
 */

require('egg').startCluster({
	baseDir: __dirname,
	port: process.env.PORT || 3000
});
