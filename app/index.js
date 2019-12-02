const express = require('express');
const http = require('http');
const fs = require('fs');
const path = require('path');
const cors = require('cors');

const app = express();
const port = 4000;

app.use(cors());

app.get('/data/food', (req, res) => {
    const json_path = path.join(__dirname, '../', 'data', 'harga_pangan', 'output', 'data.json');
    const json_string = fs.readFileSync(json_path, {'encoding':'utf-8'});

    res.setHeader('Content-Type', 'application/json');
    res.status(200).send(json_string);
})

app.listen(port, () => console.log('Request sent'));