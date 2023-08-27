const {Schema, model} =require("mongoose");

const blogSchema = Schema({
    title:{
        type: String,
        required: true,
    },
    content:{
        type: String,
        required: true
    },
    coverImageUrl:{
        type: String
    },
    createdBy:{
        type: Schema.Types.ObjectId,
        ref: "users"
    }
},{timestamps: true})

const blogs= model("blogs", blogSchema);

module.exports = blogs