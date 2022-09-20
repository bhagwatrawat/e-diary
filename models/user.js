import  mongoose from 'mongoose';
mongoose.Promise = global.Promise;
const userSchema = new mongoose.Schema({
    username:{
        type:String,
        required:true,
    },
    name:{
        type:String,
    },
    email:{
        type:String,
        required:true,
    },
    password:{
        type:String,
        required:true,
    },
});
module.exports =
    mongoose.models.user || mongoose.model('user', userSchema);