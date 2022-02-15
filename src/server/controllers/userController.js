const pool = require('../models/UserModel.js')
const userController = {};




userController.createUser = async (req,res,next) => {
    try{
        const {firstName,lastName,email,Password} = req.body;
        const q = 'INSERT INTO users (firstName, lastName, email, Password) VALUES ($1, $2, $3, $4) RETURNING *'
        //
        const newUser = await pool.query(q, [firstName, lastName, email, Password])

        res.locals.newUser = newUser
        next();
      } catch(error)  {
        const errObj = {
            log: `Error caught in Task Controller middleware @ createUser`,
            status: 400,
            message: {
              err: `${err}`,
            },
          };
          next(errObj);
      }
}
module.exports = userController;
