const express= require('express')
const {handleUserSignUp,handleUserlogin}= require('../controllers/user')
const router=express.Router()
// router.get('/login', (req, res) => {
//     res.render('login'); 
// });
router.post('/',handleUserSignUp)
router.post('/login',handleUserlogin)

module.exports= router