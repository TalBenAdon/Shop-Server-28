const userModel = require('./user.model')

async function create(data) {
    return await userModel.create(data)
}

async function read(filter = {}) {
    return await userModel.find(filter)
}

async function readOne(filter) {
    return await userModel.findOne(filter)
}

async function readOneById(id) {
    return await userModel.findById({ _id: id })
}

async function updateOne(filter, newData) {
    return await userModel.updateOne(filter, newData)
}

async function updateById(id, newData) {
    return await userModel.findByIdAndUpdate({ _id: id }, newData)
}

async function turnInactive(id) {
    return await userModel.updateOne({ _id: id }, { isActive: false })
}


module.exports = { create, read, readOne, readOneById, updateOne, updateById, turnInactive }