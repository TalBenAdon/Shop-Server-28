const express = require('express')
const itemService = require('./item.service')
const router = express.Router()

router.post('/create/:userId', async (req, res) => {
    try {

        const data = await itemService.createItem(req.params.userId, req.body.data)
        res.status(200).send(data)

    } catch (error) {
        console.log(error);
        res.status(500).send('bad request')
    }
})