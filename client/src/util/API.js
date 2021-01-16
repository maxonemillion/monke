import axios from "axios";

const API = {
    loginUser: ({ username, password }) => {
        console.log("hello world", { username, password });
        return axios.post("/api/users/login", { username, password })
    },
    postJob: (newListing) => {
        return axios.post("/api/listings/", newListing)
    },
    myListings: () => {
        return axios.get("/api/listings/")
    },
    editJob: (id, updated) => {
        return axios.post("/api/listings/" + id, {data: updated})
    },
    unlistJob: (id) => {
        return axios.delete("/api/listings/" + id)
    },
    findJobs: () => {
        return axios.get("/api/listings/")
    },
    saveJob: (savedJob) => {
        return axios.post("/api/saved/", savedJob)
    },
    mySavedJobs: () => {
        return axios.get("/api/saved/")
    },
    unsaveJob: (id) => {
        return axios.delete("/api/saved/" + id)
    }
}

export default API;