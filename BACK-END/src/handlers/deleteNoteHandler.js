const { deleteNoteController } = require("../controllers/deleteNoteController.js")



const deleteNoteHandler = async(req, res) => {
    try {
        const { id } = req.params
        const deleted = await deleteNoteController(id)
        return res.status(200).json(deleted)
    } catch (error) {
        return res.status(500).json({ error: error.message })
    }
}

module.exports = { deleteNoteHandler }