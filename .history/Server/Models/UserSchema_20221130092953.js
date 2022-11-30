const mongoose = require('mongoose')

const UserDetailSchema = new mongoose.Schema({
  username: String,
  email: String,
  password: String
}, {
  collection: 'users',
}
)

mongoose.model("UserDetails", UserDetailSchema)