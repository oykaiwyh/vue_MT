'use strict';

const Controller = require('egg').Controller;

class HomeController extends Controller {
  async index() {
    const { ctx } = this;
    // ctx.body = 'hi, egg';
    await ctx.render('../public/index.html');
  }
  async gettest() {
    const { ctx } = this;

    let test = await ctx.service.test.testservice()

    console.log('test',test)

    ctx.response.body='dada111222'

    // ctx.body =JSON.stringify(test) 
  }
  async getaa() {
    const { ctx } = this;
    // var query = ctx.query;
    // console.log('ctx',query)
    let spantest =await ctx.service.test.spantest()
    ctx.response.body='dada'
    // let test = await ctx.service.test.testservice()

    // console.log('test',test)

    // ctx.response.body='dada'

    // ctx.body =JSON.stringify(test) 
  }
}

module.exports = HomeController;
