const express = require('express')
const collections = require('../db/db')

const router = express()

router.post('/login', async (req, res) => {
    let username = req.body.username
    let password = req.body.password

    try {
        let response = await (collections.users.findOne({
            username
        }))
        if (!response) {
            throw {
                error: "User not found",
                statusCode: 404
            }
        }else {
            if(response.password !== password){
                throw {
                    error: "Wrong username or password",
                    statusCode: 401
                } 
            }

            res.send({login:"successful",user:response,token:"dtef256262caghsv"})
        }
    } catch (e) {
        res.status(e.statusCode|| 500).send({error:e.error || e.toString()})
    }

})

module.exports = router