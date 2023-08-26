const jwt = require("jsonwebtoken");
const secreKey = "$Ihateyou";

function createTokenForUser(user){
    const payload = {
        _id: user._id,
        username: user.username,
        profileImageURL: user.profileImageURL,
        role: user.role
    };
    const token = jwt.sign(payload,secreKey);
    return token
}

function validateToken(token){
    const payload = jwt.verify(token,secreKey);
    return payload;
}

module.exports = {
    createTokenForUser,
    validateToken
};