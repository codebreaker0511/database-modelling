import mongoose from 'mongoose'

const orderSchema = new mongoose.Shema({
    orderPrice: {
        type: Number,
        required: true,

    }, 
    customer: {
        type: mongoose.Schema.Types.ObjectId, 
        ref: 'User'
    }, 
    orderItems: {
        
    }
}, {timestamps: true})

export const Order = mongoose.model('Order', orderSchema)