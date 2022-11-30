const mongoose = require('mongoose')

const UserDetailSchema = new mongoose.Schema({
  username: { type: 'string', required: true, unique: true },
  email: String,
  password: String
}, {
  collection: 'users',
}
)

mongoose.model("UserDetails", UserDetailSchema)