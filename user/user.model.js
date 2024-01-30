const mongoose = require('mongoose')

const userSchema = new mongoose.Schema({
    fName: {
        type: String
    },
    lName: {
        type: String
    },
    email: {
        type: String
    },
    password: {
        type: String
    },
    permission: "user" | "admin",
    orders: [{
        orderId: {
            type: mongoose.SchemaTypes.ObjectId,
            ref: "order"
        }
    }],
    createData: {
        type: Date
    },
    isActive: {
        type: Boolean
    }
})

const userModel = mongoose.model("user", userSchema)

module.exports = userModel