import axios from "axios";

export const axiosSecure = axios.create({
    baseURL: "http://localhost:5000"
})