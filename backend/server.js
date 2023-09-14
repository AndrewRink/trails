//Modules and Global
require ('dotenv').config()
const express = require('express')
const cors = require('cors')
const app = express();

//MIDDLEWARE
app.use(cors())
app.use(express.json())

//PORT
app.listen(process.env.PORT, () => {
    console.log(`listening on port ${process.env.PORT}`)
})