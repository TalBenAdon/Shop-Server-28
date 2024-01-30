require('dotenv').config()
const express = require('express')
const PORT = 2000
const app = express()
const db = require('./db')
db.connect()
const cors = require('cors')

app.use(cors())
app.use(express.json())

const itemRouter = require('./item/item.router')
app.use('/item', itemRouter)

const userRouter = require('./user/user.router')
app.use('/user', userRouter)

const orderRouter = require('./order/order.router')
app.use('/order', orderRouter)







app.listen(PORT, () => console.log(`listening at ${PORT}`))