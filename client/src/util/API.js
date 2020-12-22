import axios from "axios";

const API = {
    loginUser: ({username, password}) => {
        console.log("hello world", {username, password});
        return axios.post("/login", {username, password})
    }
}

export default API;