import axios from "axios";

const API = {
    loginUser: ({username, password}) => {
        console.log("hello world", {username, password});
        return axios.post("/login", {username, password})
    },
    newJobs: (newJobs) => {
        return axios.post("/api/listings", newJobs)
    },
    findJobs: () => {
        return axios.get("/api/listings")
    }
}

export default API;