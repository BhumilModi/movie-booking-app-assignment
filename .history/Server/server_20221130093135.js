
const express = require('express')
const mongoose = require('mongoose')
const app = express();

app.use(express.json())

const mongoUrl = "mongodb+srv://Bhumil13:bhumil13@cluster0.8seccbr.mongodb.net/?retryWrites=true&w=majority"

mongoose.connect(mongoUrl, {
  useNewUrlParser: true,
}).then(() => {
  console.log("Connected")
}).catch(err => {
  console.log(err)
})

require("./Models/UserSchema")

const user = mongoose.model("UserDetails")

app.listen(5000, () => {
  console.log("Server Started")
})