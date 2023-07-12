const express = require("express");
require ('dotenv').config()
const cors=require('cors')
const PORT=process.env.PORT||4000;
const pool=require("./db.js")

const app = express()

//Middlewares
app.use(express.json());
app.use(cors())

const res = pool.query(`SELECT * FROM MOCK_DATA WHERE id=1`).then((suc)=>{
    console.log(suc.rows)
    pool.end()
})
console.log("hello")

app.listen(PORT,()=>{console.log(`Your server is runing on http://localhost:${PORT}`)})