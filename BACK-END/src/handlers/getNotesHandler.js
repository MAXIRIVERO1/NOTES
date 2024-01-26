const { getNotesController } = require("../controllers/getNotesController.js")



const getNotesHandler = async(req, res) => {
    try {
        const notes = await getNotesController()
        return res.status(200).json(notes)
    } catch (error) {
        return res.status(500).json({error: error.message})
    }
}


module.exports = { getNotesHandler }