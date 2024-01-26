const { Notes } = require("../db.js")



const getNotesController = async() => {
    const notes = await Notes.findAll()
    return notes
}


module.exports = { getNotesController }