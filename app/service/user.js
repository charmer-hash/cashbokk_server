'use strict'

/* 
使用 async 和 await 时，如果想捕获错误，需要使用 try...catch 来捕获，
如果代码运行过程中发生错误，都将会被 catch 捕获。
*/
const Service = require('egg').Service;

class UserService extends Service {
    // 通过用户名获取用户信息
    async getUserByName(username) {
      const { app } = this;
        try {
          const result = await app.mysql.get('user', { username });
          return result;
        } catch (error) {
          console.log(error);
          return null;
        }
    }

    // 注册
    async register(params) {
        const { app } = this;
        try {
          const result = await app.mysql.insert('user', params);
          return result;
        } catch (error) {
          console.log(error);
          return null;
        }
      }
    
    //修改用户信息
    async editUserInfo(params) {
      const { ctx, app } = this;
      try {
          // 通过app.mysql.update方法，指定user表
        let result = await app.mysql.update('user', {
          ...params //要修改的参数体，直接
        }, {
          id: params.id //筛选出id等于params.id的用户
        });
        return result;
      } catch (error) {
        console.log('error', error);
        return null;
      }
    } 
  }
  module.exports = UserService;