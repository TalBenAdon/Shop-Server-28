const itemController = require('./item.controller')
const userController = require('../user/user.controller')

async function createItem(userId, data) {
    try {
        let creatingUser = await userController.readOneById({ _id: userId })
        if (!creatingUser.permission === "admin") throw "unpermitted user"
        console.log(creatingUser);
        // if (itemController.readOne({ barcode: data.barcode }).length > 0)
        //     throw "Item barcode already exists"


    } catch (error) {
        console.log(error);
        throw error
    }

}

async function starter() {
    const db = require('../db')
    await db.connect()

    await createItem("65b96c1a5e8d87f4114d1544")


}
starter()