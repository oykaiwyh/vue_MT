'use strict'
const Controller = require('egg').Controller;

class UserController extends Controller {
    async test(){
        const { ctx } = this;

        let test = await ctx.service.user.user.test()
    
        console.log('testcontroll',test)
    
        ctx.response.body='dada'
    }
    //注册
    async signup(){
        const { ctx ,app } = this;
        const {username , password , email , code } =ctx.request.body;

        if(code){
            const saveCode =await app.redis.hget(`nodemail:${username}`,'code')
            const saveExpire=await app.redis.hget(`nodemail:${username}`,'expire')
            if( code === saveCode){
                if(new Date().getTime() - saveExpire > 0){
                    ctx.body={
                        code : -1,
                        msg: "验证码已过期，请重新尝试"
                    }
                    // return false
                }
            }else{
                ctx.body={
                    code : -1,
                    msg : '请填写正确的验证码'
                }
            }
        }else{
            ctx.body={
                code : -1,
                msg : '请填写验证码'
            }
        }

        let user = await ctx.service.user.user.findUsername(username);
        if ( user.length){
            ctx.body={
                code:-1,
                msg:'用户名已经被注册'
            }
            // return
        }
        let newUser = await ctx.service.user.signup(username , password , email)
        if(newUser){
            let res =await ctx.http.post('/user/signin',{username,password})
            if(res.data && res.data.code === 0){
                ctx = {
                    code : 0 ,
                    msg:'注册成功',
                    user:res.data.user
                }
            }else{
                ctx.body = {
                    code : -1,
                    msg:'error'
                }
            }
        }else{
            ctx.body = {
                code : -1 ,
                msg : '注册失败'
            }
        }

    }
    //登录
    async signin(){
        const { ctx } = this;
        return ctx.passport.authrnicate('local',function(err , user , info , status){
            if(err){
                ctx.body={
                    code : -1,
                    msg : err
                }
            }else{
                if(user){
                    ctx.body={
                        code : 0,
                        msg : '登陆成功',
                        user
                    }
                    return ctx.login(user)
                }else{
                    ctx.body={
                        code : 1,
                        msg:info
                    }
                }
            }
        })(ctx,next)
    }
    //验证码
    async verify(){
        const { ctx } = this
        let usernamne = ctx.request.body.username;
        const saveExpire = await this.app.redis.hget(`nodemail:${usernamne}`,'expire')
        if(saveExpire&& new Date().getTime()-saveExpire<0){
            ctx.body={
                code :-1,
                msg:'验证请求过于频繁，1分钟一次'
            }
            // return false
        }
    }
    
}

module.exports = UserController
