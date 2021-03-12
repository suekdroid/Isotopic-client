import axios from 'axios'

const BASE_URL = 'http://localhost:3000/api'

const client = axios.create({
    baseURL: BASE_URL,
    timeout: 3000, 
    headers: {"Content-Type" : "application/json"},
    withCredentials: true
})

export { client }