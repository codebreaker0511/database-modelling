import mongoose from 'mongoose'

const doctorSchema = new mongoose.Schema({
    name: {
            type: String, 
            required: true
    },
    salary: {
        type: Number, 
        required: true
    }, 
    qualification: {
        type: String, 
        required: true
    }, 
    gender: {
        type: String, 
        enum : ['M', 'F', 'Others'],
        required: true
    },
    experienceInYears: {
        type: Number, 
        default: 0
    }, 
    worksInHospitals:{
        
    }
},{timestamps: true})

export const Doctor = mongoose.model('Doctor',doctorSchema)