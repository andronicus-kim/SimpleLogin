const express = require('express')

const router = express()

router.post('/signup',(req,res) => res.send(req.body))

module.exports = router