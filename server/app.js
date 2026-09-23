const express=require ("express")
const { connect } = require("mongoose")
const connectDB = require("./config/db")
const dotenv=require("dotenv")
const courseRoute = require("./routes/courseRoutes")
const authRoute = require("./routes/authRoute")


const app=express()
app.use(express.json())
dotenv.config()

app.use("/api/auth", authRoute)
app.use("/api/courses",courseRoute)



connectDB()

app.listen(3000, ()=>{
    console.log("listening to the PORT")
})
