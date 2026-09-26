import mongoose from 'mongoose'
import { Product } from './product.models'

const orderItemSchema = new mongoose.Schema({
    productId: {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'Product'
    },
    quantity: {
        type: Number, 
        required: true
    }
})

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
        type: [orderItemSchema]
    }
}, {timestamps: true})

export const Order = mongoose.model('Order', orderSchema)