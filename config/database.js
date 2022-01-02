const mongoose = require('mongoose');


const host = process.env.DB_HOST || '127.0.0.1';
const port = process.env.DB_PORT || 27017;
const database = process.env.DB_NAME || 'todoapp';



dbconfig = 'mongodb+srv://errors:5sonline@cluster0.4orn2.mongodb.net/todoapp?retryWrites=true&w=majority';

mongoose.connect(dbconfig, {  useNewUrlParser: true })
    .then(() => console.log('MongoDB Connected'))
    .catch(err => console.log(err));