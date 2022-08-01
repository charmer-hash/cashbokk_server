/* eslint valid-jsdoc: "off" */

'use strict';

/**
 * @param {Egg.EggAppInfo} appInfo app info
 */
module.exports = appInfo => {
  /**
   * built-in config
   * @type {Egg.EggAppConfig}
   **/
  const config = exports = {};

  // use for cookie sign key, should change to your own and keep security
  config.keys = appInfo.name + '_1659257844807_8921';

  // add your middleware config here
  config.middleware = [];

  config.security = {
    csrf: {
      enable: false,
      ignoreJSON: true,
    },
    domainWhiteList: [ '*' ], // 配置白名单
  };

  // 自定义加密字符串
  config.jwt = {
    secret: 'ygy',
  };
  /*
  secret 加密字符串，将在后续用于结合用户信息生成一串 token。
  secret 是放在服务端代码中，普通用户是无法通过浏览器发现的，
  所以千万不能将其泄漏，否则有可能会被不怀好意的人加以利用 
   */

  // 以下的配置，指的是将view文件夹下的 .html后缀文件识别为 .ejs
  config.view = {
    mapping: { '.html': 'ejs' },
  };

  // 单数据库信息配置
  config.mysql = {
    // 单数据库信息配置
    client: {
      // host
      host: 'localhost',
      // 端口号
      port: '3306',
      // 用户名
      user: 'root',
      // 密码
      password: '123456',
      // 数据库名
      database: 'bill',
    },
    // 是否加载到 app 上，默认开启
    app: true,
    // 是否加载到 agent 上，默认关闭
    agent: false,
  };

  // add your user config here
  const userConfig = {
    // myAppName: 'egg',
  };


  return {
    ...config,
    ...userConfig,
  };
};

