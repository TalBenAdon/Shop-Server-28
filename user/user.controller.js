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

async function readOneById(_id) {
    const user = await userModel.findById(_id)
    return user
}

// async function starter() {
//     const db = require('../db')
//     await db.connect()

//     await readOneById("65b96c1a5e8d87f4114d1544")

// }
// starter()

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