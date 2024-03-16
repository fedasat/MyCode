const userSchema = require('../schema/UserSchema');
const mongoose = require('mongoose');


const Users= mongoose.model("Users" , userSchema);




module.exports = Users;