const express = require('express');
const app = express();
const cors= require('cors');
const common_router= require('./routes/common');
const bodyParser= require('body-parser');
const database= require('./database/db');
app.use(cors());
// app.use(bodyParser.urlencoded({extended:false})); 
app.use(express.json()) // json 
app.use('/user',common_router);
// database.sync()
// .then(()=>
app.listen(8000)
// )
// .catch(err=>console.log(err));
