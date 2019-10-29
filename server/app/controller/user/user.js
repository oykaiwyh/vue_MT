'use strict'
const Controller = require('egg').Controller;

class UserController extends Controller {
    async test(){
        const { ctx } = this;

        let test = await ctx.service.user.user.test()
    
        console.log('test',test)
    
        ctx.response.body='dada'
    }
}

module.exports = UserController
