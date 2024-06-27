// const User = require('../models/user')
// const { v4: uuidv4 } = require('uuid');
// const {setUser}= require('../service/auth');
// const { set } = require('mongoose');
// async function handleUserSignUp(req, res) {
//     const { name, email, password } = req.body

//     await User.create({
//         name, email, password,
//     })
//     //   return res.render('home')
//     return res.redirect('/')

// }
// async function handleUserlogin(req, res) {
//     const { email, password } = req.body
//     const user = await User.findOne({
//         email,
//         password
//     })
//     if (!user) {
//         return res.render('login', {
//             error: "Invalid Username or Password"
//         })
//     }
//     const sessionId=uuidv4()
//     setUser(sessionId, user)
//     res.cookie('uid', sessionId)
//     return res.redirect('/')

// }
// module.exports = { handleUserSignUp,handleUserlogin, }


//steteless

const User = require('../models/user')
const { v4: uuidv4 } = require('uuid');
const {setUser}= require('../service/auth');
const { set } = require('mongoose');
async function handleUserSignUp(req, res) {
    
    const { name, email, password } = req.body

    await User.create({
        name, email, password,
    })
    //   return res.render('home')
    return res.redirect('/')

}
async function handleUserlogin(req, res) {
    const { email, password } = req.body
    const user = await User.findOne({
        email,
        password
    })

    if (!user) {
        
        return res.render('login', {
            error: "Invalid Username or Password"
        })
        // res.redirect( 'http://localhost:8001/login');
        
    }
   
   const token= setUser( user)
    // res.cookie('uid', token)
    // console.log(token);
   
    res.cookie('id', token)

    //we can set the doamin name so that cookies are send correctly to my website only as cookies are domain 
    //specific and domain is important

    // res.cookie('uid', token,{
    //     domain: "www.google.com",
    // })
    return res.redirect('/')

}
module.exports = { handleUserSignUp,handleUserlogin, }



//json format for mobile devices

// const User = require('../models/user')
// const { v4: uuidv4 } = require('uuid');
// const {setUser}= require('../service/auth');
// const { set } = require('mongoose');
// async function handleUserSignUp(req, res) {
//     const { name, email, password } = req.body

//     await User.create({
//         name, email, password,
//     })
//     //   return res.render('home')
//     return res.redirect('/')

// }
// async function handleUserlogin(req, res) {
//     const { email, password } = req.body
//     const user = await User.findOne({
//         email,
//         password
//     })
//     if (!user) {
//         return res.render('login', {
//             error: "Invalid Username or Password"
//         })
//     }

//    const token= setUser( user)
//      return res.json({token});

//     //we can set the doamin name so that cookies are send correctly to my website only as cookies are domain 
//     //specific and domain is important

//     // res.cookie('uid', token,{
//     //     domain: "www.google.com",
//     // })
   

// }
// module.exports = { handleUserSignUp,handleUserlogin, }

