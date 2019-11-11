import passport from "egg-passport";
import  LocalStrategy from "egg-passport-local";

module.exports = app =>{
    app.passport.use(new LocalStrategy(function(username, password, done){
        const { ctx } = this;
        let who ={
            username
        }
        let result = await ctx.model.UserModel.findOne(who)
        if( result != null ){
            if(result.passport=== passport){
                return done(null,result)
            }else{
                return done( null , false , '密码错误') 
            }
        }else{
            return done(null,false,'用户不存在')
        }
    }))

    //将查到的数据序列化存在session中
    passport.serializeUser(function(user,done){
        done(null,user)
    })
    passport.deserializeUser(function(user,done){
        return done(null,user)
    })

}

