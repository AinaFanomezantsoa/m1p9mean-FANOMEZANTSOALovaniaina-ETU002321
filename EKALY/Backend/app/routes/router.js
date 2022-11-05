const { Router } = require('express');
const express = require('express');
const route = express.Router()

const services = require('../service/render');
const controller = require('../controller/controller');
const restoController = require('../controller/restoController');
const menuController = require('../controller/menuController');

/**
 * @description Root Route
 * @method GET /
 */
route.get('/', services.homeRoutes);

/**
 * route.get('/',(req, res)=>{
    res.render('index');
})
 */

route.get('/add-user', services.add_user);
route.get('/add-resto', services.add_resto);
route.get('/add-menu', services.add_menu);
/**
 * route.get('/add-user',(req, res)=>{
    res.render('add_user');
})
 */

route.get('/update-user', services.update_user);
/**
 * route.get('/update-user',(req, res)=>{
    res.render('update_user');
})
 */

//API
route.post('/api/users', controller.create);
route.get('/api/users', controller.find);
route.put('/api/users/:id', controller.update);
route.delete('/api/users/:id', controller.delete);


route.post('/api/restos', restoController.create);
route.get('/api/restos', restoController.find);
route.put('/api/restos/:id', restoController.update);
route.delete('/api/restos/:id', restoController.delete);

route.post('/api/menus', menuController.create);
route.get('/api/menus', menuController.find);
route.put('/api/menus/:id', menuController.update);
route.delete('/api/menus/:id', menuController.delete);

module.exports = route