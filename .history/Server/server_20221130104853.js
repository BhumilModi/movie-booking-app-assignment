const cors = require('cors')
const express = require('express')
const mongoose = require('mongoose')
const jwt = require('jsonwebtoken')
const app = express();

const JWT_secret = 'asfdghdvccaert5egfdbvbbiyrudrertsdf'

app.use(express.json())
app.use(cors())
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

app.post("/signUp", async (req, res) => {
  const { userName, email, password } = req.body
  try {
    const olduser = await user.findOne({ email })
    if (olduser) {
      return res.json({ error: "User already exists" })
    }
    await user.create({
      username: userName,
      email,
      password
    })
    res.send({ status: "ok" })
  } catch (err) {
    res.send({ status: "error" })
  }
})

app.post('/login', async (req, res) => {
  const { email, password } = req.body

  const user_exist = await user.findOne({ email })

  if (!user_exist) {
    return res.json({ error: "user doesnt exist" })
  }
  if (password === user_exist.password) {
    const token = jwt.sign({}, JWT_secret)
  }
})

app.listen(5000, () => {
  console.log("Server Started")
})