require('dotenv').config()
const express = require('express')
const cors = require('cors')
const mysql = require('mysql2')

const app = express()
const PORT = process.env.PORT || 5001

const db = mysql.createConnection({
    host: process.env.DB_HOST,
    user: process.env.DB_USER,
    password: process.env.DB_PASSWORD,
    database: process.env.DB_NAME,
    port: process.env.DB_PORT
})

db.connect((err) => {
    if(err) {
        console.log('mysql DB 연결 실패 : ', err)
        return
    }
    console.log('mysql DB 연결 성공')
})

app.use(cors())
app.use(express.json())

app.listen(PORT, () => {
    console.log(`Server is running on ${PORT} Port`)
})