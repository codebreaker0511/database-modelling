import mongoose from 'mongoose'

const userSchmea = new mongoose.Schema({
    username: {
        type: String,
        unique: true, 
        required: true,
        lowercase: true
    },
    email: {
        type: String,
        unique: true, 
        required: true,
        lowercase: true
    },
    password:{
        type: String, 
        required: true
    }
},{timestamps: true})

export const User = mongoose.model('User',userSchmea);