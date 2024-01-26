const server = require('./src/app.js');
const { conn } = require('./src/db.js');



server.get("/", (req, res) => {
    try {
        const htmlResponse =
    `<html>
      <head>
      <link rel="icon" href="data:;base64,iVBORw0KGgo=">
        <title>Node.js y express</title>
      </head>
      <body>
        <h1>Proyecto levantado</h1>
      </body>
    </html>`
    res.send(htmlResponse);
    } catch (error) {
    res.json({error: error.message})
    }
})

conn.sync({ force: false }).then(() => {
  server.listen(3001, () => {
    console.log('listening at 3001');
  });
});
