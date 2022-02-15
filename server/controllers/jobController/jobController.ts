const pool = require('../models/UserModel.js')
const jobController = {};
import * as express from 'express'



jobController.createJob = async (req,res,next) => {
    try{
        const {firstName,lastName,email,Password} = req.body;
        const q = 'INSERT INTO users (firstName, lastName, email, Password) VALUES ($1, $2, $3, $4) RETURNING *'
        //
        const newUser = await pool.query(q, [firstName, lastName, email, Password])

        res.locals.newUser = newUser
        next();
      } catch(error)  {
        const errObj = {
            log: `Error caught in jobController middleware @ createUser`,
            status: 400,
            message: {
              err: `${err}`,
            },
          };
          next(errObj);
      }
}

jobController.deleteUser = async (req,res,next) => {
    try{
        const {user_id} = req.body;

        const q = 'DELETE FROM users WHERE user_id=$1 RETURNING *'
        const deletedUser = await pool.query(q, [user_id])

        res.locals.deletedUser = deletedUser;

        next();
      } catch(error)  {
        const errObj = {
            log: `Error caught in User Controller middleware @ deleteUser`,
            status: 400,
            message: {
              err: `${err}`,
            },
          };
          next(errObj);
      }
}

jobController.updateUser = async (req,res,next) => {
    try{
        const {user_id} = req.body;

        const q = 'DELETE FROM users WHERE user_id=$1 RETURNING *'
        const deletedUser = await pool.query(q, [user_id])

        res.locals.deletedUser = deletedUser;

        next();
      } catch(error)  {
        const errObj = {
            log: `Error caught in User Controller middleware @ deleteUser`,
            status: 400,
            message: {
              err: `${err}`,
            },
          };
          next(errObj);
      }
}
module.exports = jobController;
