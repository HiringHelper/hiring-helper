const pool = require('../models/UserModel.js')
const bcrypt = require('bcryptjs');
const userController = {};

userController.getUser = async (req,res,next) => {
  try{
      const {user_id} = req.body;
      const q = 'SELECT * FROM users WHERE user_id=$1'
 
      const user = await pool.query(q, [user_id])

      res.locals.user = user;
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


userController.createUser = async (req,res,next) => {
    const {firstName,lastName,email,Password} = req.body;
    const saltRounds = 10;
    const q = 'INSERT INTO users (firstName, lastName, email, Password) VALUES ($1, $2, $3, $4) RETURNING *'

    bcrypt.hash(Password, saltRounds, async (err, hash) => {
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
        const {firstName, lastName, email, password, user_id} = req.body;

        const q = 'UPDATE users SET firstName=$1, lastName=$2, email=$3, password=$4 WHERE user_id=$5 RETURNING *'
        const updatedUser = await pool.query(q, [firstName, lastName, email, password, user_id])

        res.locals.updatedUser = updatedUser;

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
  const {email, Password} = req.body;
  
  const q = 'SELECT * FROM users WHERE email=$1'
  const user = await pool.query(q, [email])
  if(user.rows.length === 0){
    return res.status(401).send('Invalid Username or Password')
  }
  const hashedPass = user.rows[0].password

  res.locals.user = user;
  bcrypt.compare(Password, hashedPass, (err,result) =>{
    if(err){
      console.log(err)
      next(err)
    }
    if(result){
      next()
    }else{
      return res.status(401).send('Invalid Username or Password')
    }
  })

}
module.exports = userController;
