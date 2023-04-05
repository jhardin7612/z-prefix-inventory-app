const express = require('express');
const cors =require('cors')
const app = express();
const port =8080;
const knex = require('knex')(require ('./knexfile.js')[process.env.NODE_ENV||'development']);

app.use(cors());
app.use(express.json());



//Root endpoint
app.get('/', (req, res) => {res.send('Root End point')});                  

app.listen(port, () => console.log(`Express Server is running on port ${port}`));