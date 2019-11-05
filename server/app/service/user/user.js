'use strict';

const Service = require('egg').Service;

class UserService extends Service {
  async test() {
    console.log('131441424')
    const { ctx } =this;
    console.log('ctx',ctx.model)
    let aa= await ctx.model.User.create({username:'张三22233'})
    console.log('aa',aa)
    return aa
  }
}

module.exports = UserService;
