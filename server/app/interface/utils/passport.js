import passport from "egg-passport";
import  LocalStrategy from "egg-passport-local";
import UserModel from "../../model/user";

passport.use(new LocalStrategy(function(username, password, done){
    const { ctx } = this;
    let who ={
        username
    }
    let result = await UserModel.findOne(who)
}))


