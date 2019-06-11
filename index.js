const express = require("express");
const mysql = require("mysql");
const app = express();
const greeting = "Hello Steve!!";
const pool = mysql.createPool({

    host: "localhost",
    user: "root",
    password: "Rozah1997",
    database: "bank_listing"
});

app.get("/", (req, res) => {

    //res.send("Hello steve" );
    res.json({ message: greeting + " This is awesome, the server is up!!" });
});

app.get("/api/bank", (req, res) => {
    //fetch bank
    pool.query("SELECT * FROM Bank", (error, rows) => {
        if (error) {
            return res.status(500).json({ error });
        }
        res.json(rows);
    });
});

app.listen(9000, function () {
    console.log("App listening on port 9000");
});