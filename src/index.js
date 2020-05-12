const express = require('express')
const home = require("./routes/Home.js")



const app = express()
const port = process.env.PORT

app.use(home)

app.listen(port, () => {
    console.log("Listening on port 3000.")
})