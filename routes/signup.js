const express = require('express')
const collections = require('../db/db')

const router = express()

router.post('/signup', async (req, res) => {
    try {
        let response = await collections.users.insert(req.body)
        throw {
            error: 'some self error',
            statusCode: 305
        }
        
        response.result.ok ? res.status(200).send(response) : res.status(400).send(response)

    } catch (e) {
        res.status(e.statusCode || 500).send({
            error: e.error || e.toString()
        })
    }

})

module.exports = router