require('dotenv').config()

const express = require('express');
const mongoose = require('mongoose')
const app = express();

mongoose.connect(process.env.DATA_BASE_URL, {useNewUrlParser: true} )

const db = mongoose.connection

db.on("error", (error) => console.log(error))
db.once("open", () => console.log("connected to DataBase"))

app.use(express.json())

const subscribersRouter = require('./routes/subscribers')
app.use('/subscribers', subscribersRouter )

app.listen(3000, () => console.log('Server started'))

