'use strict';

const Service = require('egg').Service;

class TestService extends Service {
  async testservice() {
    console.log('131441424')
    const { ctx } =this;

    const test = await ctx.model.Test.create({name:'张三'},(err,data)=>{
        if(err){
            // ctx.response.data={data}
            console.log('err',err)
        }
        else{
          console.log('testdata1313',data)
          return data
        }
    })

    console.log('testdata',test)
    return test


    // try {
    //     // console.log('ctx.module',ctx.module.test)

    //     const test=await ctx.module.test.create({name:'张三',age:20,type:'人'},(data,err)=>{
    //         if(err){
    //             console.log('err',err)
    //         }
    //         else{
    //             console.log('data',data)
    //         }
    //     })

    //     return test
    // } catch (error) {
    //     console.log('error',error)
    //     ctx.body=JSON.stringify(error)
    // }
  }
  async spantest(){
    const { ctx } =this;
    var query = ctx.query;
    console.log('ctx',query)
    // var query = ctx.params.value;
      const test = await ctx.model.Spantest.update({aa:query.aa,bb:query.bb,cc:query.cc},(err,data)=>{
          if(err){
              // ctx.response.data={data}
              console.log('err',err)
          }
          else{
            console.log('testdata1313',data)
            return data
          }
      })

      console.log('testdata',test)
      return test



  }
}

module.exports = TestService;
