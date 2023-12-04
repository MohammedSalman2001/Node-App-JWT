const express = require('express')
const mongoose = require('mongoose')

require('dotenv').config();

const app = express();


const port = process.env.SERVER_PORT;
mongoose.connect('mongodb://localhost:27017/customer_mongo').then(() => {
    app.listen(port, () => {
        console.log(`api start & running  :${port}`)
    })

})clear



