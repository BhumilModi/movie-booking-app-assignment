const cors = require('cors')
const express = require('express')
const mongoose = require('mongoose')
const bodyParser = require('body-parser')
const jwt = require('jsonwebtoken')
const app = express();
const JWT_secret = 'asfdghdvccaert5egfdbvbbiyrudrertsdf'
const User = require('./Models/UserSchema')

app.use(bodyParser.json())
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

app.post("/api/login", async (req, res) => {
  const { email, password } = req.body

  const user = await User.findOne({ email, password }).lean()
  console.log(user)

  if (!user) {
    return res.json({ status: 'error', error: 'Invalid username or password' })
  }

  res.json({ status: 'ok', data: "JWT token" })
})

app.post("/api/signUp", async (req, res) => {
  console.log(req.body)
  const { username, password, email } = req.body

  try {
    const data = await User.create({
      username,
      email,
      password
    })
    console.log(data)
  } catch (err) {
    if (err.code === 11000) {
      return res.json({ status: "error", error: "Email already used" })
    }
    throw err
  }
  res.json({ status: 'ok' })
})


// require("./Models/UserSchema")

// const user = mongoose.model("UserDetails")

// app.post("/signUp", async (req, res) => {
//   const { userName, email, password } = req.body
//   try {
//     const olduser = await user.findOne({ email })
//     if (olduser) {
//       return res.json({ error: "User already exists" })
//     }
//     await user.create({
//       username: userName,
//       email,
//       password
//     })
//     res.send({ status: "ok" })
//   } catch (err) {
//     res.send({ status: "error" })
//   }
// })

// app.post('/login', async (req, res) => {
//   const { email, password } = req.body

//   const user_exist = await user.findOne({ email })

//   if (!user_exist) {
//     return res.json({ error: "user doesnt exist" })
//   }
//   if (password === user_exist.password) {
//     const token = jwt.sign({}, JWT_secret)

//     if (res.status(201)) {
//       return res.json({ data: token, status: "ok" })
//     } else {
//       return res.json({ error: "error" })
//     }
//   }
//   res.json({ status: "error", error: "Invalid password" })
// })

app.listen(5000, () => {
  console.log("Server Started")
})