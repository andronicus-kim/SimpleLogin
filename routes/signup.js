const express = require('express')
const collections = require('../db/db')

const router = express()

router.post('/signup',(req,res) => collections.users.insert(req.body))

module.exports = router