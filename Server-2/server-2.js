const express=require('express')
const mongoose = require('mongoose');
const app=express()

app.get('/server-2',(req,res)=>{
    res.send(`server 2 
    first edit from server 2
    second edit from server 2

    server 3-edit 2
    
    server3 edit4`)

})











const start = async () => {
    try {
        mongoose.set('strictQuery', true)
        await mongoose.connect(process.env.MONGO_URI);   // mogo url from env
        console.log('Connected to MongoDb');
    } catch (err) {
        console.error(err);
    }
    app.listen(4000, () => {console.log('Listening on port 4000!!!!!!!!');});
}
start();