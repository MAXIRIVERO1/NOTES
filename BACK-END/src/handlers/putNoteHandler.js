const { putNoteController } = require("../controllers/putNoteController.js")



const putNoteHandler = async(req, res) => {
    try {
        const { id } = req.params
        const { title, content, tag, active } = req.body
        const updated = await putNoteController(id, title, content, tag, active)
        return res.status(200).json(updated)
    } catch (error) {
        return res.status(500).json({ error: error.message })
    }
}


module.exports = { putNoteHandler }