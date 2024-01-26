const { Notes } = require("../db.js")



const deleteNoteController = async(id) => {
    const found = await Notes.findByPk(id)
    if(!found){ return { success: false, message: "note not found"} }
    await found.destroy()
    return "note deleted"
}



module.exports = { deleteNoteController }