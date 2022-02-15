const express = require('express');
const jobController = require('../controllers/jobController');
const router = express.Router();

// ADD STARTER DATA REQUEST ROUTE HANDLER HERE

router.post('/create-job', jobController.createJob, (req,res) =>{
    return res.status(201).json({jobs: res.locals.newJob})
});

//confirm with idan what the default parm is in sql db 
router.delete('/delete-job', jobController.deleteJob, (req,res)=>{
    return res.status(200).json({deleted: res.locals.deletedJob})
});

router.put('/update-job', jobController.updateJob, (req,res)=>{
    return res.status(200).json({updated: res.locals.updatedJob})    
});


module.exports = router;