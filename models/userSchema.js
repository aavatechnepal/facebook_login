const mongoose = require ('mongoose');
const userSchema = mongoose.Schema({
    name : {
        type : String,
        required : true,
    },
    password : {
        type : String,
        required : true,
    },
})

const fbData = mongoose.model('facebookuserData', userSchema);
module.exports = fbData;