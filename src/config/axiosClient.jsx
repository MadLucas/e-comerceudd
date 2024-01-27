import axios from "axios";

const axiosClient = axios.create({
    baseURL: "https://e-comerce-back.onrender.com"
})

export default axiosClient;