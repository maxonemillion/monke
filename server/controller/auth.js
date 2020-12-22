// mongoose.schema

const auth = {
    login: ({ username, password }) => {
        console.log("Login", {username, password})
    }
}

module.exports = auth;