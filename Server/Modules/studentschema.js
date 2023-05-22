import mongoose from "mongoose";

const userSchema = mongoose.Schema({
    name:{
        type:String,
        required:true
    },
    course:{
        type:String,
        required:true
    },
    age:{
        type:Number,
        required:true
    },
    contact:{
        type:Number,
        required:Number
    },
    email:{
        type:String,
        required:true
    },
    fees:{
        type:Number
    }

})

export default mongoose.model("mongocollection", userSchema)