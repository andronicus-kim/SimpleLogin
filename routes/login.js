const express = require('express')


const router = express()

router.post('/login',(req,res) => res.send(req.body))

module.exports = router