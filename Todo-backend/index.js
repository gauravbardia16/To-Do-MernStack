const express = require('express');
const cors = require("cors")

const app = express();

const taskrouter = require('./routes/todolist');

app.use(express.json());

//connection to mongodb
const router = require('express').Router();

const { default: mongoose } = require('mongoose');
const todoItemsModel = require('./models/todolist');

const mongoUri = 'mongodb+srv://garvjain4362:gaurav12345@todo-list.a4yshem.mongodb.net/?retryWrites=true&w=majority';
mongoose.connect(mongoUri, { useNewUrlParser: true, useUnifiedTopology: true });

const db = mongoose.connection;
db.on('error', console.error.bind(console, 'MongoDB connection error:'));
db.once('open', function() {
  console.log('Connected to MongoDB database');
  
});

app.use(cors({
  origin:[
    "*",
    "http://localhost:3000",
  ]
}))

app.use('/', taskrouter);

const port = 5000;
app.listen(port, () => {
    console.log("server connected");
})