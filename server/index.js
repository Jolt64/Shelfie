require('dotenv').config();
const express = require('express');
const massive = require('massive');
const { SERVER_PORT, CONNECTION_STRING } = process.env;

const CF = require('./controller')
const app = express();
app.use(express.json());


massive(CONNECTION_STRING).then(db => {
    app.set('db', db)
    console.log('Data hitting');
}).catch(err => console.log(`dag yo, this (${err}) happened`))

app.get('/api/products', CF.getAllProducts);
app.post('/api/product', CF.createProduct);
app.delete('/api/product/:id', CF.deleteProduct);

app.listen(SERVER_PORT, () => console.log(`${SERVER_PORT} Grand Slams`))