import axios from "axios";

const API = {
    loginUser: ({ username, password }) => {

        return axios.post("/api/users/login", { username, password })
    },
    postJob: (newListing) => {
        return axios.post("/api/listings/", newListing)
    },
    myListings: () => {
        return axios.get("/api/listings/")
    },
    editJob: (id, updated) => {
        return axios.post("/api/listings/" + id, updated)
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