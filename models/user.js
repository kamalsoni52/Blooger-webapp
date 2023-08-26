const { Schema, model } = require("mongoose")
const {createHmac, randomBytes} = require("crypto")
const {createTokenForUser} = require("../services/auth")
const userSchema = new Schema({
    username: {
        type: String,
        required: true,
    },
    email: {
        type: String,
        required:true,
        unique: true
    },
    password: {
        type: String,
        required: true
    },
    salt: {
        type: String
    },
    role: {
        type: String,
        enum: ["USER", "ADMIN"],
        default: "USER"
        
    },
    profileImageURL: {
        type: String,
        default: "/images/user.png"
    }
},{timestamps: true})

userSchema.pre("save", function(next){
    const user = this;
    if(!user.isModified("password")) return
    const saltKey = randomBytes(16).toString();
    const hashedPassword = createHmac("sha256",saltKey)
                            .update(user.password)
                            .digest("hex");
    this.salt = saltKey;
    this.password = hashedPassword;
    next();
});

userSchema.static("matchPasswordAndGenerateToken",  async function(email, password){
    const user = await this.findOne({email});
    
    if(!user) throw new Error("User Not found");
    const salt = user.salt;
    const hashedPassword = user.password;
    const newHashedPassword = createHmac("sha256",salt)
                            .update(password)
                            .digest("hex");
    if(hashedPassword !== newHashedPassword) throw new Error("Incorrect password");

    const token = createTokenForUser(user);
    return token;    
})

const User = model("users",userSchema);

module.exports = User