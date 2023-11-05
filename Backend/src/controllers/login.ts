import { Request, Response } from "express";
import mysql from "mysql2";
import dbConfig from "../db";
import { generateResponse } from "../utils";

const pool = mysql.createPool({
    port: dbConfig.port,
    user: dbConfig.user,
    password: dbConfig.password,
    database: dbConfig.database,
    waitForConnections: true,
    connectionLimit: 10,
    queueLimit: 0,
  });

export const login = (req: Request, res: Response) => {
    try {
        pool.getConnection((err, connection) => {
          if (err) {
            console.error("Error connecting to the database:", err);
            return res
              .status(500)
              .json(generateResponse(false, null, "Database connection error"));
          }

          const sql = "SELECT * FROM register WHERE `email` = ? AND `password` = ? ";
    const values = [
        req.body.name,
        req.body.phone,
        req.body.email,
        req.body.password
    ]
    connection.query(sql, [req.body.email, req.body.password], (err, data) => {
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
        } catch (err) {
            console.error("Error in getleavesDetails:", err);
            res
              .status(500)
              .json(generateResponse(false, null, "Error fetching leaves"));
          }
}