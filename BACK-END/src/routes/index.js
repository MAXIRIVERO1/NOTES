const { Router } = require('express');
const { routerNotes } = require("./routerNotes.js")


const router = Router();


router.use("/notes", routerNotes)


module.exports = router;