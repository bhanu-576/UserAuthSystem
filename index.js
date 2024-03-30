const express = require('express')
const app = express()
const port = 3000

app.post('/',(req,res)=>{
    res.send("Hello Bhanu this is post request")
})
app.get('/',(req,res)=>{
    res.send("Hello bhanu this is get request")
})
app.put('/user',(req,res)=>{
    res.send("Hello bhanu this is put request")
})

app.all('/secret',(req,res,next)=>{
    console.log("Accessing the secret")
    next()
})


app.listen(port,()=>{
    console.log(`App listening port on ${port}`)
})
