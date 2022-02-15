const express = require('express');
const userController = require('../controllers/userController');
const router = express.Router();


//expects: user_id in request body
//return: user found: user object
//        user not found: 404 'user not found'
router.get('/get-user', userController.getUser, (req,res) =>{
    return res.status(201).json({user: res.locals.user})
});

//expects: req.body = { firstName, lastName, email }
//returns: email taken: 409 status 'email already taken'
//         email availible: returns user object
router.post('/create-user', userController.checkUserEmail, userController.createUser, (req,res) =>{
    return res.status(201).json({user: res.locals.newUser})
});

//expects: user_id
//returns: deleted user
router.delete('/delete-user', userController.deleteUser, (req,res)=>{
    return res.status(200).json({deleted: res.locals.deletedUser})
});

//expects: user_id, email, firstName, lastName
//return: user not found: 404 'no user found with given id"
//        user found: user object
router.put('/update-user', userController.updateUser, (req,res)=>{
    return res.status(200).json({updated: res.locals.updatedUser})    
});

//expects: email, password
//returns: unverified: 401 'invalid username or password'
//         verified: array of jobs associated with user
router.get('/verify-user', userController.verifyUser, userController.getJobsForUser, (req,res) =>{
    return res.status(201).json({jobs: res.locals.userJobs})
});

module.exports = router;
