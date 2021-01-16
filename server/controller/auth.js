const { Users } = require("../models/")

// mongoose.schema

const auth = {
    login: () => {

        Users.create({
            email: req.body.text
        })
    }
}

module.exports = auth;