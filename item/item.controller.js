const itemModel = require('./item.model')

async function create(data) {
    return await itemModel.create(data)
}

async function read(filter = {}) {
    try {

        const answer = await itemModel.find(filter)
        return answer
    } catch (error) {
        console.log("error in read function", error);
        throw error
    }
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
// async function starter() {
//     const db = require('../db')
//     await db.connect()

//     const result = await read({ category: "fruits" })
//     console.log(result);
// }
// starter()

module.exports = { create, read, readOne, readOneById, updateOne, updateById, turnInactive }