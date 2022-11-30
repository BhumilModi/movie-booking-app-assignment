const mongoose = require('mongoose')

const UserSchema = new mongoose.Schema({
  username: { type: String, required: true },
  email: { type: String, required: true, unique: true },
  password: { type: String, required: true }
}, {
  collection: 'users',
}
)

const model = mongoose.model("UserDetails", UserSchema)

module.exports = model