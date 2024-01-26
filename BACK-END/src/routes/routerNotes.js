const { createNotesHandler } = require("../handlers/createNotesHandler.js")
const { getNotesHandler } = require("../handlers/getNotesHandler.js")
const { putNoteHandler } = require("../handlers/putNoteHandler.js")
const { deleteNoteHandler } = require("../handlers/deleteNoteHandler.js")
const { getByIdHandler } = require("../handlers/getByIdHandler.js")



const routerNotes = require("express").Router();


routerNotes.post("/create", createNotesHandler )
routerNotes.get("/get", getNotesHandler )
routerNotes.put("/put/:id", putNoteHandler )
routerNotes.delete("/delete/:id", deleteNoteHandler )
routerNotes.get("/detail/:id", getByIdHandler)


module.exports = {routerNotes}