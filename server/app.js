const express = require('express');
const cors =require('cors')
const app = express();
const port =8080;
const knex = require('knex')(require ('./knexfile.js')[process.env.NODE_ENV||'development']);

app.use(cors());
app.use(express.json());


//Root endpoint
app.get('/', (req, res) => {res.send('Root End point')}); 

//get all items in db
app.get('/inventory', (req, res)=> {
    knex
    .select('*')
    .from('item')
    .then(data => res.status(200).json(data))
    .catch(err =>
        res.status(404).json(err)
    )
})

//get a specific item
app.get('/inventory/:item_id', (req, res)=> {
    knex('item')
    .where('id', req.params.item_id)
    .then(data => res.status(200).json(data))
    .catch(err =>
        res.status(404).json(err)
    )
})

//get all items in specific manager inventory
app.get('/inventory/manager/:manager_id', (req, res) => {
    knex('item')
    .select('*')
    .where("manager_id",req.params.manager_id)
    .then(data => res.status(200).json(data))
    .catch(err=> res.status(404).json(err))
})

//get all registered managers & info
app.get('/managers', (req, res)=>{
    knex
    .select('*')
    .from('manager')
    .then(data => res.status(200).json(data))
    .catch(err =>
        res.status(404).json(err)
    )
})

//get a specific manager info
app.get('/managers/:username', (req, res)=>{
    knex('manager')
    .select('*')
    .where("username", req.params.username)
    .then(data => res.status(200).json(data))
    .catch(err =>
        res.status(404).json(err)
    )
})

//Delete item
app.delete('/inventory/:item_id', (req, res) => {
    knex('item')
    .where("id",req.params.item_id)
    .del()
    .then(data => res.status(200).send("item was deleted"))
    .catch(err=> res.status(404).json(err))
})

//Create Item
app.post('/inventory', (req, res) => {
    knex('item')
    .insert(req.body)
    .then(data => res.status(201).send("item has been added to your inventory"))
    .catch(err=> res.status(404).json(err))
})

//Create New Manager
app.post('/managers', (req, res) => {
    knex('manager')
    .insert(req.body)
    .then(data => res.status(201))
    .catch(err=> res.status(404).json(err))
})


//Update Item
app.patch('/inventory/:item_id', (req, res) => {
    knex('item')
    .where("id", req.params.item_id)
    .update({
        manager_id: req.body.manager_id,
        item_name: req.body.item_name,
        description: req.body.description,
        quantity: req.body.quantity
    })
    .then(data => res.status(200).send("item updated"))
    .catch(err=> res.status(404).json(err))
})




app.listen(port, () => console.log(`Express Server is running on port ${port}`));