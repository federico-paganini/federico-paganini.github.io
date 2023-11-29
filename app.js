const express = require(`express`);
const app = express();
const path = require(`path`);
const mariadb = require('mariadb');
const jwt = require('jsonwebtoken');
const port = 3000;

const dataFolderPath = path.join(__dirname);

const pool = mariadb.createPool({
    host: "localhost",
    user: "root",
    password: "A68398k2",
    database: "panaderia",
    connectionLimit: 5
});