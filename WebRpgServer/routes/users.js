const jwt = require('jsonwebtoken');


const express = require('express');
const router = express.Router();
const mysql = require('mysql');
const { database } = require('../keys');


const conn = mysql.createConnection(database);
conn.connect((err) => {
    if (err) {
        console.error(err);
    } else {
        console.log('DB connected');
    }
});

router.get('/', (req, res) => {
    conn.query(`SELECT * from user`, (err, result) => {
        if (err) {
            console.log(err);
        }
        res.send(result);
    });
});

module.exports = router;