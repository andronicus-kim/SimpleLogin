const express = require('express')
const login = require('./routes/login')
const signup = require('./routes/signup')
const bodyParser = require('body-parser')
const app = express()
const PORT = process.env.PORT || 7800


app.use(bodyParser.json())
app.use('/user',login)
app.use('/user',signup)

app.listen(PORT, () => console.log(`Listening on port ${PORT}`)
)