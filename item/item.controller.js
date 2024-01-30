const itemModel = require('./item.model')

async function create(data) {
    return await itemModel.create(data)
}

async function read(filter = {}) {
    return await itemModel.find(filter)
}

async function readOne(filter) {
    return await itemModel.findOne(filter)
}

async function readOneById(id) {
    return await itemModel.findById({ _id: id })
}

async function updateOne(filter, newData) {
    return await itemModel.updateOne(filter, newData)
}

async function updateById(id, newData) {
    return await itemModel.findByIdAndUpdate({ _id: id }, newData)
}

async function turnInactive(id) {
    return await itemModel.updateOne({ _id: id }, { isActive: false })
}


module.exports = { create, read, readOne, readOneById, updateOne, updateById, turnInactive }