import axios from "axios";

const API = {
    loginUser: ({username, password}) => {
        console.log("hello world", {username, password});
        return axios.post("/login", {username, password})
    },
    postJob: (newListing) => {
        return axios.post("/api/listings", newListing)
    },
    findJobs: () => {
        return axios.get("/api/listings")
    },
    saveJob: (savedJob) => {
        return axios.post("/api/saved", savedJob)
    },
    mySavedJobs: () => {
        return axios.get("/api/saved")
    },
    unsaveJob: (id) => {
        return axios.delete("api/saved/" + id)
    }
}

export default API;