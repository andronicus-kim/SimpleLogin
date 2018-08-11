const express = require('express')

const router = express()

router.post('/login',(req,res) => res.send(req.body))

router.get('/login',(req,res) => res.send(req.params))

module.exports = router