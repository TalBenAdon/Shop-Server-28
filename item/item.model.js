const mongoose = require('mongoose')

const itemSchema = new mongoose.Schema({
    category: {
        type: String,
        required: true
    },
    name: {
        type: String,
        required: true
    },
    barcode: {
        type: String,
        required: true,
        unique: true
    },
    emoji: {
        type: String,
    },
    image: {
        type: String,
    },
    price: {
        type: Number,
    },
    isActive: {
        type: Boolean,
        default: true,
    }
})

const itemModel = mongoose.model('item', itemSchema)

module.exports = itemModel