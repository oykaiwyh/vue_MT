module.exports = app => {
    const mongoose = app.mongoose;
    const Schema = mongoose.Schema;
    const SpanSchema = new Schema({
        
            aa:Number,
            bb:Number,
            cc: Number
        
    });
    return mongoose.model('Spanview', SpanSchema); //返回model，其中Test为数据库中表的名称
}