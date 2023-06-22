const express = require("express")
const app = express()
const PORT=4000;

app.listen(PORT,()=>{console.log(`Your server is runing on http://localhost:${PORT}`)})