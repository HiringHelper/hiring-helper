const express = require('express');

const userController = require('../controllers/userController');

const router = express.Router();

// ADD STARTER DATA REQUEST ROUTE HANDLER HERE
router.post('/create-user', userController.createUser, (req,res) =>{
    return res.status(200).json({user: res.locals.newUser})
});

//confirm with idan what the default parm is in sql db 
router.delete('/delete-user', userController.deleteUser, (req,res)=>{
    return res.status(200).json({deleted: res.locals.deletedUser})
});

router.delete('/create-user', (req,res)=>{
});


module.exports = router;
