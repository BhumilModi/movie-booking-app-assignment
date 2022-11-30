const cors = require('cors')
const express = require('express')
const mongoose = require('mongoose')
const bodyParser = require('body-parser')
const jwt = require('jsonwebtoken')
const app = express();
const JWT_secret = 'asfdghdvccaert5egfdbvbbiyrudrertsdfffsbsbdvcsavfadufiogefwoebf'
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

app.get("/api/:id", async (req, res) => {
  const token = req.params.id
  const user = jwt.verify(token, JWT_secret)
  const userInfo = await User.findOne({ email: user.email }).lean()
  console.log(userInfo)
  // const data = userInfo[0]
  res.json({ status: "ok", data: userInfo })
})

app.post("/api/userData", async (req, res) => {
  const { token } = req.body
  try {
    const user = jwt.verify(token, JWT_secret)
    const userInfo = await User.findOne({ email: user.email }).lean()
    console.log(userInfo)
  } catch (err) {
    return res.jsom({ status: "error", error: err })
  }
  res.json({ status: "ok", data: userInfo })
})

app.post("/api/login", async (req, res) => {
  const { email, password } = req.body

  const user = await User.findOne({ email, password }).lean()
  console.log(user)

  if (!user) {
    return res.json({ status: 'error', error: 'Invalid username or password' })
  }

  const token = jwt.sign({
    id: user._id,
    email: user.email
  }, JWT_secret)

  res.json({ status: 'ok', data: token })
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

app.post('/api/bookMovie', async (req, res) => {
  const { email, title, tickets, date } = req.body
  console.log(email, title, date, tickets)
  console.log(tickets * 200)

  res.json({ status: 'ok' })
})

app.listen(5000, () => {
  console.log("Server Started")
})