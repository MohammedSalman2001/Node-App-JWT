const express = require('express')
const mongoose = require('mongoose')

const bodyParser=require('body-parser');




require('dotenv').config();

const app = express();
app.use(bodyParser.urlencoded({extends:false}))
app.use(bodyParser.json())

//=================================

const customerRoute=require('./route/CustomerRoute')
//=================================

const port = process.env.SERVER_PORT || 3000;
mongoose.connect('mongodb://127.0.0.1:27017/customer_mongo').then(() => {
    app.listen(port, () => {
        console.log(`api start & running  :${port}`)
    })

})


app.use('/api/v1/customers',customerRoute) //http://localhost:3000/api/v1/customers/save-customer



