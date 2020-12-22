const { Users } = require("../models/")

// mongoose.schema

const auth = {
    login: () => {
        console.log("Login", { Users })
        Users.create({
            email: req.body.text
        })
    }
}

module.exports = auth;