require("dotenv").config();
const express = require("express");
const mysql = require("mysql");
const app = express();
const pool = mysql.createPool({

    host: process.env.DB_HOST,
    user: process.env.DB_USER,
    password: process.env.DB_PASS,
    database: process.env.DB_NAME
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

app.get("/api/category/local", (req, res) => {
    pool.query("SELECT Logo_url,Bank_name,Count(DISTINCT Bank_id) as number_of_branches FROM Bank WHERE category='local'", (error, rows) => {
        if (error) {
            return res.status(500).json({ error });
        }
        res.json(rows);
    });
});

app.get("/api/category/international", (req, res) => {
    pool.query("SELECT Logo_url,Bank_name,Count(Bank_id) as number_in_this_category FROM Bank  WHERE category='international'", (error, rows) => {
        if (error) {
            return res.status(500).json({ error });
        }
        res.json(rows);
    });
});


app.get("/api/branch", (req, res) => {
    pool.query("SELECT b.Logo_url, br.Branch_name,br.Location,br.Email, br.Operation_hrs FROM Branch as br JOIN Bank as b ON br.Bank_id = b.Bank_id;", (error, rows) => {
        if (error) {
            return res.status(500).json({ error });
        }
        res.json(rows);
    });
});

app.get("/api/equity/branches",(req,res)=>{
pool.query("SELECT b.Bank_name, b.Logo_url, Location, Branch_name, Phone_Number, Email,Operation_hrs FROM Branch as br JOIN Bank as b ON  b.Bank_id=br.Bank_id AND b.Bank_id='1';",(error,rows)=>{
    if(error){
        return res.status(500).json({error});
    }
    res.json(rows);
});
});

app.listen(9000, function () {
    console.log("App listening on port 9000");
});