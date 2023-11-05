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

app.put('/changepassword', (req, res) => {
    
    //retrieve the user from the database based on their email
    const selectUserSQL = "SELECT * FROM register WHERE email = ?";
    db.query(selectUserSQL, [req.body.email], (selectUserErr, userData) => {
        if (selectUserErr) {
            console.error("Error retrieving user data:", selectUserErr);
            return res.json("Error");
        }
        if (userData.length === 0) {
            console.error("User not found");
            return res.json("user not found");
        }

        const user = userData[0];
        // For debugging, display user.password in the console
        console.log("User's Password:", user.password);
        console.log("Current Password:", req.body.currentPassword);

        // Check if the current password matches the one stored in the database
        if (user.password !== req.body.currentPassword) {
            console.error("Current password is incorrect");
            return res.json('Current password is incorrect' );
        }

        // Update the password to the new one
        const sql = "UPDATE register SET `password`= ? WHERE email = ? ";
        db.query(sql, [req.body.newPassword, req.body.email], (err, updatedData) => {
            if (err) {
                console.error("Failed to update password:", err);
                return res.json("Failed to update password");
            } else {
                console.log("Password updated successfully");
                return res.json("Updated Password Successfully!");
            }
        });
    });

});

app.listen(8081, ()=> {
    console.log("listening. Server is running on port 8081");
})