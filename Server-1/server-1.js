const express = require('express')
const mongoose = require('mongoose');

const app = express()

app.get('/server-1', (req, res) => {
    res.send(`Server 
    first edit from server 1
    second edit fro server1`)
})


const start = async () => {
    try {
        mongoose.set('strictQuery', true)
        await mongoose.connect(process.env.MONGO_URI);   // mogo url from env
        console.log('Connected to MongoDb');
    } catch (err) {
        console.error(err);
    }
    app.listen(3000, () => {console.log('Listening on port 3000!!!!!!!!');});
}
start();