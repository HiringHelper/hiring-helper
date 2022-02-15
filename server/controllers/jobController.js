const pool = require('../models/UserModel.js')
const jobController = {};




jobController.createJob = async (req,res,next) => {
    try{
        const {
          companyName, jobtitle, deadline, dateApplied,
          description, color, notes, contacts, stage,
          location, salary, offer, user_id
        } = req.body;
        const q = `
            INSERT INTO jobs (companyName, jobtitle, deadline, dateApplied,
              description, color, notes, contacts, stage,
              location, salary, offer, user_id) 
            VALUES ($1,$2,$3,$4,$5,$6,$7,$8,$9,$10,$11,$12,$13)
            RETURNING *`
    
        const newJob = await pool.query(q, 
          [companyName, jobtitle, deadline, dateApplied,
          description, color, notes, contacts, stage,
          location, salary, offer, user_id]
          )
        res.locals.newJob = newJob
        next();
      } catch(error)  {
        console.log(error)
        const errObj = {
            log: `Error caught in jobController middleware @ createJob`,
            status: 400,
            message: {
              error: `${error}`,
            },
          };
          next(errObj);
      }
}

jobController.deleteJob = async (req,res,next) => {
    try{
        const {job_id} = req.body;
        const q = 'DELETE FROM jobs WHERE job_id=$1 RETURNING *'
        const deletedJob = await pool.query(q, [job_id])

        res.locals.deletedJob = deletedJob;

        next();
      } catch(error)  {
        const errObj = {
            log: `Error caught in User Controller middleware @ deleteJob`,
            status: 400,
            message: {
              err: `${error}`,
            },
          };
          next(errObj);
      }
}

jobController.updateJob = async (req,res,next) => {
    try{
      const {
        companyName, jobtitle, deadline, dateApplied,
        description, color, notes, contacts, stage,
        location, salary, offer, user_id, job_id
      } = req.body;
      const q = `
      UPDATE jobs 
      SET companyName=$1, jobtitle=$2, deadline=$3, dateApplied=$4,
      description=$5, color=$6, notes=$7, contacts=$8, stage=$9,
      location=$10, salary=$11, offer=$12, user_id=$13 
      WHERE job_id=$14
      RETURNING *`

      const updatedJob = await pool.query(q, 
        [companyName, jobtitle, deadline, dateApplied,
        description, color, notes, contacts, stage,
        location, salary, offer, user_id,job_id]
        )
      res.locals.updatedJob = updatedJob;
      next();
    } catch(error)  {
      console.log(error)
      const errObj = {
          log: `Error caught in User Controller middleware @ updateJob`,
          status: 400,
          message: {
            err: `${error}`,
          },
        };
        next(errObj);
    }
}
module.exports = jobController;
