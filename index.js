require('dotenv').config()
const express = require('express')
const PORT = 2000
const app = express()
const db = require('./db')
db.connect()
const cors = require('cors')

app.use(cors())
app.use(express.json())









app.listen(PORT, () => console.log(`listening at ${PORT}`))