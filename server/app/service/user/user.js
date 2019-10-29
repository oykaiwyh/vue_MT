'use strict';

const Service = require('egg').Service;

class UserService extends Service {
  async test() {
    console.log('131441424')
    const { ctx } =this;
    console.log('ctx',ctx.model)
    // await ctx.model.Test.Test.create({name:'张三'},(err,data)=>{
    //     if(err){
    //         // ctx.response.data={data}
    //         console.log('err',err)
    //         return err
    //     }
    //     else{
    //       console.log('testdata1313',data)
    //       return data
    //     }
    // })
  }
}

module.exports = UserService;
