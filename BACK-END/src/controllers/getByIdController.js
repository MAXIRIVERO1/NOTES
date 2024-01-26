const { Notes } = require("../db.js")



const getByIdController = async(id) => {
    const found = await Notes.findByPk(id)
    if(!found){ return { success: false, message: "note not found" }}
    return found
}


module.exports = { getByIdController }