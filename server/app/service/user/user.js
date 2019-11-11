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
  async findUsername(username){
    const { ctx } = this;
    let user = await ctx.model.User.find({username})
    return user
  }
  async signup(username , password , email){
    const { ctx } = this;
    let newuser = await ctx.model.User.create({username , password , email})
    return newuser
  }
}

module.exports = UserService;
