const mongoose = require("mongoose");

const User = mongoose.model(
    "User",
    new mongoose.Schema({
        username: String,
        email: String,
        password: String,
        age: Number,
        famille: String,
        races : String,
        nourriture : String,
        roles: [
            {
                type: mongoose.Schema.Types.ObjectId,
                ref: "Role"
            }
        ],
        favorie:[
            {
                type: mongoose.Schema.Types.String,
                ref:"User"
            }
        ]
    })
);

module.exports = User;
