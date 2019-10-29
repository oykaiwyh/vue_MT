
module.exports = app => {
    const mongoose = app.mongoose;
    const Schema = mongoose.Schema;
    const UserSchema = new Schema({
        
            name:String,
            age:Number,
            type: String
        
    });

    return mongoose.model('User', UserSchema); //返回model，其中Test为数据库中表的名称
}