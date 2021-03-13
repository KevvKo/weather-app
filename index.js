const express = require("express")
const app = express()
const path = require("path")

// middleware
app.use(express.static(path.join(__dirname, ".", "build")))
app.use(express.static("public"));

app.listen(3001, () => {
    console.info("Server is listening on port 3001")
})