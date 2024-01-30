const orderModel = require('./order.model')

async function create(data) {
    return await orderModel.create(data)
}

async function read(filter = {}) {
    return await orderModel.find(filter)
}

async function readOne(filter) {
    return await orderModel.findOne(filter)
}

async function readOneById(id) {
    return await orderModel.findById({ _id: id })
}

async function updateOne(filter, newData) {
    return await orderModel.updateOne(filter, newData)
}

async function updateById(id, newData) {
    return await orderModel.findByIdAndUpdate({ _id: id }, newData)
}

module.exports = { updateById, updateOne, readOneById, readOne, read, create }
