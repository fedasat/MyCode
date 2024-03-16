const express = require('express');
const router=express.Router();

const UserController=require('../controller/UserController');
const RicettaController=require('../controller/RicettaController');

//const Rmiddelware= require('./middleware/Rmiddelware');

router.post('/LoginUser' ,UserController.LoginUser);
router.post('/SignUpUser',UserController.SignUpUser);

router.post('/CreateUser',UserController.CreateUser);
router.delete('/DeleteUser/:id',UserController.DeleteUser);
router.put('/UpdateUser',UserController.UpdateUser);
router.get('/getallUser', UserController.getall)

router.post('/CreateRicetta' ,RicettaController.createRicetta);
router.delete('/DeleteRicetta',RicettaController.DeleteRicetta);
router.put('/UpdateRicetta',RicettaController.UpdateRicetta);
router.get('/getAllRicetta',RicettaController.getall);


//router.post('/Login/Users',check.checkUsers, UsersController.UsersLogin);
//router.put('/update/:id', TodoController.update)
//router.delete('/delete/:id', TodoController.delete)

module.exports = router