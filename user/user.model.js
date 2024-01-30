const mongoose = require('mongoose')

const userSchema = new mongoose.Schema({
    fName: {
        type: String
    },
    lName: {
        type: String
    },
    email: {
        type: String,
        unique: true,
        required: true,
        trim: true,
        lowercase: true,
        match: [/^\S+@\S+\.\S+$/, 'Please enter a valid email address']
    },
    password: {
        type: String
    },
    permission: {
        type: String,
        enum: ["user", "admin"],
        default: "user"
    },
    orders: [{
        orderId: {
            type: mongoose.SchemaTypes.ObjectId,
            ref: "order"
        }
    }],
    createData: {
        type: Date,
        default: Date.now
    },
    isActive: {
        type: Boolean,
        default: true
    }
})

const userModel = mongoose.model("user", userSchema)

module.exports = userModel