const mongoose = require('mongoose')
const dotenv = require('dotenv').config()
const mongoDB = "mongodb://127.0.0.1/my_databse"
const express = require('express')
const app = express()
const bodyParser = require('body-parser')
const port =3000



// mongoose connection
mongoose.connect(process.env.mongoDB).then(()=>{
    console.log("connection of database successfully")
})


app.use(bodyParser.json())
app.use(bodyParser.urlencoded( {extended :true}))

app.listen(port,()=>{
    console.log(`App listening on port ${port}`)
})