const moongose = require('mongoose')

const userModel = moongose.Schema({
  name: {type:String, required: true},
  email :{type:String, required: true},
  password:{type:String, required: true},
  pic: { type:String, required: true, default:"https://img.freepik.com/premium-vector/man-avatar-profile-round-icon_24640-14044.jpg?w=2000"
    },
},{
  timestamps: true})

const User = moongose.Model('User', userModel);
module.exports = User;