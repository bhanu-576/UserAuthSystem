const express = require('express')
const user = require('../models/userModel')
const bcrypt = require('bcrypt')

const router = express.Router()

//Sign up route

router.post("/sign-up", async (req,res)=>{
    try {
        //extract mail and password from the req.body object
        const {email,password} = req.body
        //Check the user is already in use
        let userExist = await UserActivation.findOne({ email})

        if(userExist){
            res.status(401).json({message: "Email is already in use"})
            return
        }
        // Define saltRound
        const saltRound = 10

        //hash password

        bcrypt.hash(password,saltRound,(err,hash)=>{
            if(err) throw new Error(" Interna server error")
            // create a new user
            let user = new User({
                email,
                password: hash,
            })
             
            //save user to databse
            user.save().then(()=>{
                res.json({message:"User created successfully", user})
            })
        })

    } catch (err){
        return res.status(401).send(err.message)
    }
})


//Sign in routes
router.post("/sign-in",async (req,res)=>{
    try {
        // extract email and password from the req.body object
        const {email,password} = req.body
        // check if user exist in database
        let user = await User.findOne({email})

        if(!user){
            return res.status(401).json({message: "invalid credentials"})

        }
        // compare password

        bcrypt.compare(password,user.password,(err,result)=>{
            if(result){
                return res.status(200).json({message: "User logged in successfully"})

            }
            console.log(err)
            res.status(401).json({message:"Invalid credentials"})
        })
    } catch (error) {
        res.status(401).send(err.message)
    }
})

module.exports = router