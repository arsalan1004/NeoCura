const {Pool}=require("pg")
require ('dotenv').config()


const pool=new Pool({
        host: process.env.POSTGRES_HOST,
        user:process.env.POSTGRES_USER,
        port: process.env.POSTGRES_PORT,
        password: process.env.POSTGRES_PASSWORD,
        database:process.env.POSTGRES_DATABASE
    })
pool.connect().then(()=>{console.log("database connected")}).catch((err)=>{console.log("database not connected",err)})
    


module.exports = pool