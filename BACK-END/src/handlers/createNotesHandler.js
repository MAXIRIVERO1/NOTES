const { createNoteController } = require("../controllers/createNotesController.js")




const createNotesHandler = async(req, res) => {
    try {
        const { title, content, tag, active } = req.body;
        const created = await createNoteController({ title, content, tag, active })
        return res.status(200).json(created)
    } catch (error) {
        return res.status(500).json({error: error.message}) 
    }
}


module.exports = { createNotesHandler }