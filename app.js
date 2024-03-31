const mongoose = require('mongoose')
const dotenv = require('dotenv').config()
const mongoDB = "mongodb+srv://bhanu576:Bhanu576@atlascluster.176ejh3.mongodb.net/?retryWrites=true&w=majority&appName=AtlasCluster"
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