import mysql from "mysql"
import * as dotenv from "dotenv"

dotenv.config()

const dbsql = mysql.createConnection({
    host: process.env.SQL_HOST,
    port: process.env.SQL_PORT,
    user: process.env.SQL_USER,
    password: process.env.SQL_PASSWORD,
    database: process.env.SQL_DATABASE
})


export default dbsql