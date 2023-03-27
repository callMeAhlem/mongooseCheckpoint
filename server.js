const express=require('express')
const mongoose=require('mongoose')
const personRoutes=require('./Routes/Persons')
require('dotenv').config()

const app=express()

//body parsing
app.use(express.json())

//routes
app.use('/persons',personRoutes)


//db connection
mongoose.connect(process.env.MONGO_URI)
.then(()=>{
    app.listen(process.env.PORT,()=>{
        console.log('my server is running and connected to db',process.env.PORT)
    })
})
.catch((error)=>{
console.log(error)
})

