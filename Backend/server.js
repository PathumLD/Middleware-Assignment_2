const express = require("express");
const mysql = require('mysql');
const cors = require('cors');

const app = express();
app.use(cors());
app.use(express.json());

const db = mysql.createConnection({
    host: "localhost",
    user: "root",
    password: "",
    database: "stl"
})

// Establish a database connection
db.connect((err) => {
  if (err) {
    console.error("Error connecting to the database: " + err.stack);
    return;
  }
  console.log("Connected to the database");
});

app.post('/register', (req, res) => {
    const sql = "INSERT INTO register (`name`, `phone`, `email`, `password`) VALUES (?)";
    const values = [
        req.body.name,
        req.body.phone,
        req.body.email,
        req.body.password
    ]
    db.query(sql, [values], (err, data) => {
        if (err) {
            return res.json("Error");
        }
        return res.json(data);
    })
});

app.post('/login', (req, res) => {
    const sql = "SELECT * FROM register WHERE `email` = ? AND `password` = ? ";

    db.query(sql, [req.body.email, req.body.password], (err, data) => {
        if (err) {
            return res.json("Error"); 
        }
        if(data.length > 0) {
            return res.json("Success");
        } else {
            return res.json("Fail");
        }
    })
});

app.get("/cartitem", (req, res) => {
  const sql = "SELECT * FROM items";
  db.query(sql, (err, results) => {
    if (err) {
      console.error("Error fetching cart items:", err);
      return res.status(500).json({ message: "Internal Server Error" });
    }

    return res.status(200).json(results);
  });
});

app.listen(8081, ()=> {
    console.log("listening. Server is running on port 8081");
})