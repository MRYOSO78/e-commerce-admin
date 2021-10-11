const express = require("express");
const app = express();
const mysql = require('mysql');

const db = mysql.createPool({
    host: "localhost",
    user: "root",
    password: "password",
    database: "centie"
})


app.get("/", (req, res) => {

    const sqlInsert = "INSERT INTO products (product_id, product_price, product_category, product_pictures) VALUES ('2', '400', 'Electronics' )"
    db.query(sqlInsert, (err, result) => {
        res.send("Hello world");
    })
    
});

app.listen(3000, () => {
    console.log("Running on port 3000");
});