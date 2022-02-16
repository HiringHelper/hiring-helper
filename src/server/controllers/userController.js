const pool = require('../models/UserModel.js')
const bcrypt = require('bcryptjs');
const userController = {};




userController.getUser = async (req,res,next) => {
  try{
      const {user_id} = req.body;
      const q = 'SELECT * FROM users WHERE user_id=$1'
 
      const user = await pool.query(q, [user_id])
      if(user.rows.length === 0){
        return res.status(404).send('User not Found')
      }
      res.locals.user = user.rows[0];
      next();
    } catch(error)  {
      const errObj = {
          log: `Error caught in userController middleware @ getUser`,
          status: 400,
          message: {
            error: `${error}`,
          },
        };
        next(errObj);
    }
}

userController.checkUserEmail = async (req, res, next) => {
  const {email} = req.body;
  const sqlQuery = 'SELECT * FROM users WHERE email=$1';
  try{
    const usersWithEmail = await pool.query(sqlQuery, [email])
    if(usersWithEmail.rows.length === 0){
      return next()
    }else{
      return res.status(409).send('Email already in use')
    }
  }catch(error){
    console.log(error)
    return next(error)
  }
}

userController.createUser = async (req,res,next) => {
    const {firstName,lastName,email,password} = req.body;
    const saltRounds = 10;
    const q = 'INSERT INTO users (firstName, lastName, email, password) VALUES ($1, $2, $3, $4) RETURNING *'

    bcrypt.hash(password, saltRounds, async (err, hash) => {
      if(err){
        console.log(err)
        return next(err)
      }
      try{
        const newUser = await pool.query(q, [firstName, lastName, email, hash])
        res.locals.newUser = newUser
        next();
      } catch(error)  {
        const errObj = {
            log: `Error caught in userController middleware @ createUser`,
            status: 400,
            message: {
              error: `${error}`,
            },
          };
          next(errObj);
      }
    })
    
}

userController.deleteUser = async (req,res,next) => {
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

userController.updateUser = async (req,res,next) => {
    try{
        const {firstName, lastName, email, user_id} = req.body;

        const q = 'UPDATE users SET firstName=$1, lastName=$2, email=$3 WHERE user_id=$4 RETURNING *'
        const updatedUser = await pool.query(q, [firstName, lastName, email,  user_id])
        console.log(updatedUser.rows)
        if(updatedUser.rows.length === 0){
          return res.status(404).send('no user found with given id')
        }
        res.locals.updatedUser = updatedUser.rows[0];
        next();
      } catch(error)  {
        const errObj = {
            log: `Error caught in User Controller middleware @ updateUser`,
            status: 400,
            message: {
              err: `${err}`,
            },
          };
          next(errObj);
      }
}

userController.verifyUser = async (req,res,next) => {
  const {email, password} = req.body;
  
  const q = 'SELECT password, user_id, state FROM users WHERE email=$1'
  const user = await pool.query(q, [email])
  if(user.rows.length === 0){
    res.locals.user_id = -1
    res.locals.state = ''
    return next()
  }
  const hashedPass = user.rows[0].password
  bcrypt.compare(password, hashedPass, (err,result) =>{
    if(err){
      console.log(err)
      next(err)
    }
    if(result){
      res.locals.user_id = user.rows[0].user_id
      res.locals.state = user.rows[0].state
      return next()
    }else{
      res.locals.user_id = -1
      res.locals.state = ''
      return next()
    }
  })

}

userController.getJobsForUser = async (req,res,next) => {
  const {user_id} =res.locals.user.rows[0]
  
  const q = 'SELECT * FROM jobs WHERE user_id=$1'
  try{
    const jobs = await pool.query(q, [user_id]);
    res.locals.userJobs = jobs.rows;
    next();

  }catch(error){
    console.log(error)
    next(error)
  }
}

userController.updateUserState = async (req,res,next) => {
  try{
      const {state, user_id} = req.body;

      const q = 'UPDATE users SET state=$1 WHERE user_id=$2 RETURNING *'
      const updatedUser = await pool.query(q, [state,  user_id])
      if(updatedUser.rows.length === 0){
        return res.status(404).send('no user found with given id')
      }
      res.locals.updatedUserState = updatedUser.rows[0];
      next();
    } catch(error)  {
      const errObj = {
          log: `Error caught in User Controller middleware @ updateUser`,
          status: 400,
          message: {
            err: `${error}`,
          },
        };
        next(errObj);
    }
}

userController.getUserState = async (req,res,next) => {
  const {user_id} = req.body;
  
  const q = 'SELECT state FROM users WHERE user_id=$1'
  try{
    const state = await pool.query(q, [user_id]);
    console.log(state)
    res.locals.state = state.rows[0].state;
    next();

  }catch(error){
    console.log(error)
    next(error)
  }
}
module.exports = userController;
