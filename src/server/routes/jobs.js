const express = require('express');
const jobController = require('../controllers/jobController');
const router = express.Router();

// ADD STARTER DATA REQUEST ROUTE HANDLER HERE

//expects entire jobs object
router.post('/create-job', jobController.createJob, (req,res) =>{
    return res.status(201).json({jobs: res.locals.newJob})
});

//expects job_id
router.delete('/delete-job', jobController.deleteJob, (req,res)=>{
    return res.status(200).json({deleted: res.locals.deletedJob})
});

//expects entire job object
router.put('/update-job', jobController.updateJob, (req,res)=>{
    return res.status(200).json({updated: res.locals.updatedJob})    
});

//expects user_id
router.delete('/delete-all-job', jobController.deleteAllJobsForUser, (req,res)=>{
    return res.status(200).send('all jobs deleted for user')
});

module.exports = router;