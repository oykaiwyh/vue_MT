module.exports = app =>{
    const mongoose = app.mongoose;
    const Schema = mongoose.Schema;
    const UserSchema = new Schema({
        username :{
            type : String,
            unique : true,  //唯一
            require : true
        },
        password : {
            type:String,
            require : true

        },
        email:{
            type:String,
            require:true
        }
    })

    return mongoose.model('User',UserSchema)
}