import passport from "egg-passport";
import  LocalStrategy from "egg-passport-local";

module.exports = app =>{
    const { ctx } = app
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
        }
    }))
}



