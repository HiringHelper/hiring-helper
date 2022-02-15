const express = require('express');

const userController = require('../controllers/userController');

const router = express.Router();

// ADD STARTER DATA REQUEST ROUTE HANDLER HERE
router.get('/get-user', userController.getUser, (req,res) =>{
    return res.status(201).json({user: res.locals.user})
});

router.post('/create-user', userController.createUser, (req,res) =>{
    return res.status(201).json({user: res.locals.newUser})
});

//confirm with idan what the default parm is in sql db 
router.delete('/delete-user', userController.deleteUser, (req,res)=>{
    return res.status(200).json({deleted: res.locals.deletedUser})
});

router.put('/update-user', userController.updateUser, (req,res)=>{
    return res.status(200).json({updated: res.locals.updatedUser})    
});

router.get('/verify-user', userController.verifyUser, (req,res) =>{
    return res.status(201).json({user: res.locals.user})
});

module.exports = router;
