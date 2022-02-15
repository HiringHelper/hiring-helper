const express = require('express');

const userController = require('../controllers/userController');

const router = express.Router();

// ADD STARTER DATA REQUEST ROUTE HANDLER HERE
router.post('/create-user', userController.createUser, (req,res) =>{
    return res.status(200).json({user: res.locals.newUser})
});

router.post('/create-user', (req,res)=>{
});

router.delete('/create-user', (req,res)=>{
});


module.exports = router;
