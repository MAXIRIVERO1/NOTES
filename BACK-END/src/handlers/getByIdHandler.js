const { getByIdController } = require("../controllers/getByIdController.js")


const getByIdHandler = async(req, res) => {
    try {
        const { id } = req.params
        const found = await getByIdController(id)
        return res.status(200).json(found)
    } catch (error) {
        return res.status(500).json({error: error.message})
    }
};


module.exports = { getByIdHandler }