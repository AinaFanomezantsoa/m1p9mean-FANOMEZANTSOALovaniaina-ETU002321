const express = require('express');
const dotenv = require('dotenv');
const morgan = require('morgan');
const bodyparser = require('body-parser');
const connectDB = require('./app/database/connection');

const app = express();

dotenv.config({path: 'config.env'})
const PORT = process.env.PORT || 8080


//log requests
app.use(morgan('tiny'));

//mongodb connection
connectDB();

//parse request to body-parser
app.use(bodyparser.urlencoded({extended:true}))

//set view engine
app.set("view engine","ejs");
//app.set("views", path.resolve(__dirname, "views/ejs") )

app.use('/', require('./app/routes/router'))

app.listen(3000,()=>{
    console.log(`Server is running on http://localhost:${PORT}`)
});