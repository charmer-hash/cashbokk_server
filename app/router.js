'use strict';

/*
  用于配置 URL 路由规则，比如上述初始化代码中的 get 请求，
  npm run dev 启动项目之后，你可以直接在浏览器中访问启动的端口 + 路径，
  你将会拿到 app/controller 文件夹下，home.js 脚本中 index 方法返回的内容
 */

/**
 * @param {Egg.Application} app - egg application
 */
module.exports = app => {
  const { router, controller } = app;
  router.get('/', controller.home.index);
  router.post('/api/user/register',controller.user.register);
  router.post('/api/user/login',controller.user.login);
};
