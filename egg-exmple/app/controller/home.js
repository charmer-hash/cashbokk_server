'use strict';

/*
controller
用于解析用户的输入，处理后返回相应的结果。上述我们也提到了，
通过请求路径将用户的请求基于 method 和 URL 分发到对应的 Controller 上，
而 Controller 要做的事情就是响应用户的诉求。举个例子，我想拿到 A 用户的个人信息，
于是我们要在控制器（Controller）里，通过请求携带的 A 用户的 id 参数，
从数据库里获取指定用户的个人信息。我画了一个简易流程图如下：
 */

const Controller = require('egg').Controller;

class HomeController extends Controller {
  async index() {
    const { ctx } = this;
    // const { id } = ctx.query;
    // ctx.body = 'hello';
    // ctx.render默认会去view文件夹寻找index.html,这是egg约定好的
    await ctx.render('index.html', {
      title: '我用egg写的页面', // 将title传入index.html
    });
  }

  // 获取用户信息
  async user() {
    const { ctx } = this;
    const result = await ctx.service.home.user();
    ctx.body = result;
  }
  // post请求
  async add() {
    const { ctx } = this;
    const { title } = ctx.request.body;
    /*    Egg 框架内置了 bodyParser 中间件来对 POST 请求 body 解析成 object
      挂载到 ctx.request.body 上 */
    ctx.body = {
      title,
    };
  }
  async addUser() {
    const { ctx } = this;
    const { name } = ctx.request.body;
    try {
      const result = await ctx.service.home.addUser(name);
      ctx.body = {
        code: 200,
        msg: '添加成功',
        data: result,
      };
    } catch (error) {
      ctx.body = {
        code: 500,
        msg: '添加失败',
        data: null,
      };
    }
  }

  async editUser() {
    const { ctx } = this;
    const { id, name } = ctx.request.body;
    try {
      const result = await ctx.service.home.editUser(id, name);
      ctx.body = {
        code: 200,
        msg: '修改成功',
        data: result,
      };
    } catch (error) {
      ctx.body = {
        code: 500,
        msg: '修改失败',
        data: null,
      };
    }
  }

  async deleteUser() {
    const { ctx } = this;
    const { id } = ctx.request.body;
    try {
      const result = await ctx.service.home.deleteUser(id);
      ctx.body = {
        code: 200,
        msg: '删除成功',
        data: result,
      };
    } catch (error) {
      ctx.body = {
        code: 500,
        msg: '删除失败',
        data: null,
      };
    }
  }

}

module.exports = HomeController;
