//STATE-FULL AUTHENTICATION

// const sessionIdToUserMap= new Map()
// function setUser(id, user){
//     sessionIdToUserMap.set(id, user)
// }
// function getUser(id){
//     return sessionIdToUserMap.get(id);
// }
// module.exports={
//     setUser,
//     getUser,
// }

//STATELESS

const jwt= require('jsonwebtoken');

const secret= "hello!123"


function setUser( user){
    
    return jwt.sign({
        name:user.name,
        _id: user._id,
        email: user.email,
        role: user.role,
    }, secret);

}
function getUser(token){
    if(!token) return null;
    try {
        return jwt.verify(token,secret);

    } catch (error) {
        return null
    }

}

module.exports={
    setUser,
    getUser,
}
