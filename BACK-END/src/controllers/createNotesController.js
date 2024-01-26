const { Notes } = require("../db.js")


const createNoteController = async(note) => {
    const created = await Notes.create(note);
    return created
}


module.exports = { createNoteController }