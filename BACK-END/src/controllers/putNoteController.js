const { Notes } = require("../db.js")



const putNoteController = async(id, title, content, tag, active) => {
    const found = await Notes.findByPk(id)
    if(!found){ return { success : false, message : "note not found"} }
    const uptade = { title, content, tag, active}
    const updatedNote = found.update(uptade)
    return updatedNote

}

module.exports = { putNoteController }