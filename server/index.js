const express = require("express");
const app = express();
const mysql = require('mysql');
const bodyParser = require('body-parser');
const cors = require('cors');

const db = mysql.createPool({
    host: "localhost",
    user: "root",
    password: "",
    database: "centie"
})

app.use(cors());
app.use(express.json());
app.use(bodyParser.urlencoded({extended: true}))

app.get("/api/getUsers", (req, res) => {
    db.getConnection((err, connection) => {
        if(err) throw err
        console.log('connected as id ${connection.threadId}');

        connection.query('SELECT * FROM users', (err, rows) =>{
            connection.release();

            if(!err){
                res.send(rows);
            }else{
                console.log(err);
            }
        })
    });
});

app.listen(5000, () => {
    console.log("Running on port 5000");
});