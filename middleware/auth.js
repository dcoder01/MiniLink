// const { getUser } = require('../service/auth')
// async function restrictToLoggedinUserOnly(req, res, next) {
//     const userUid = req.cookies?.uid;
//     if (!userUid) res.redirect('/login');
//     const user = getUser(userUid)
//     if (!user) res.redirect('/login')
//     req.user = user;
//     next();
// }
// async function checkAuth(req, res, next) {
//     const userUid = req.cookies?.uid;
   
//     const user = getUser(userUid)
    
//     req.user = user;
//     next();
// }
// module.exports={
//     restrictToLoggedinUserOnly,
//     checkAuth,
// }

//json for mobile

// const { getUser } = require('../service/auth')
// async function restrictToLoggedinUserOnly(req, res, next) {
    
//     const userUid = req.headers['authorization']
//     console.log(req.headers);
//     if (!userUid)
//          return res.redirect('/login');

//     const token=userUid.split('Bearer ')[1]; // "Bearer [sklfdjkj4w]]"
//     const user = getUser(token)
//     if (!user) return res.redirect('/login')
//     req.user = user;
//     next();
// }
// async function checkAuth(req, res, next) {
//     console.log(req.headers);
//     const userUid = req.headers['authorization'] 
//     if (!userUid || userUid.trim() === '') {
//         return res.status(401).json({ error: "Authorization header missing or empty" });
//     }  
//     const token=userUid.split('Bearer ')[1]; 
//     const user = getUser(token)
//     req.user = user;
//     next();
// }

// module.exports={
//     restrictToLoggedinUserOnly,
//     checkAuth,
// }

//refactor authorization and authenticatioin

const { getUser } = require('../service/auth')
 function checkForAuthentication(req, res, next) {
    const tokenCookie = req.cookies?.id;
    req.user=null;
    
    // console.log(tokenCookie);
    if (!tokenCookie) return next();
    const token= tokenCookie
    const user = getUser(token)
    req.user = user;
    // console.log(user);
    // console.log(req.user);
    // if (!user) res.redirect('/login')
    return next();
}
 function restrictTo(roles=[]) {
     return function(req, res, next){
        // console.log(req.user);
        if(!req.user){ return res.redirect('/login');}
        if(!roles.includes(req.user.role)) return res.end('unauorized')
        return next();
    };
}
module.exports={
    checkForAuthentication,
    restrictTo,
}