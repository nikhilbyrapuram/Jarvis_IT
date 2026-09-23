const mongoose=require("mongoose")
const courseSchema=new mongoose.schema({
    title:{
        type:String,
        required:true
    },
    description:{
        type:String,
        required:true
    },
    instructer:{
        type:String,
        required:true
    },
    category:{
        type:String,
        required:true
    },
    level:{
        type:String,
        required:true
    },
    price:{
        type:Number,
        required:true
    },
    duration:{
        type:Number,
        required:true
    },
    createdAt:{
        type:Date,
        required:true
    }
},
{
    timestamps:true
})
const Course= new mongoose.model("Course",courseSchema)
module.exports=Course 

