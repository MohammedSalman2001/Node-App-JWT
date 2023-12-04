const express = require('express')
const mongoose = require('mongoose')

require('dotenv').config();

const app = express();


const port = process.env.SERVER_PORT || 3000;
mongoose.connect('mongodb://127.0.0.1:27017/customer_mongo').then(() => {
    app.listen(port, () => {
        console.log(`api start & running  :${port}`)
    })

})

app.use("/",(req,res,next)=>{
    console.log('work')
})



