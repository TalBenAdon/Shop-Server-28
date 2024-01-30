const mongoose = require('mongoose')

const orderSchema = new mongoose.Schema({
    orderDate: {
        type: Date,
    },
    userId: {
        type: mongoose.SchemaTypes.ObjectId,
        ref: "user",
    },
    items: [{
        itemId: {
            type: mongoose.SchemaTypes.ObjectId,
            ref: "item",
        },
        price: {
            type: Number
        },
        amount: {
            type: Number
        }
    }],
    total: {
        type: Number
    },

})

const orderModel = mongoose.model('order', orderSchema)

module.exports = orderModel

