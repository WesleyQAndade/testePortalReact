import axios from 'axios';

export const apiPortal = axios.create({
    baseURL: "127.0.0.1:8082/portal/"
})

export const apiReport = axios.create({
    baseURL: "127.0.0.1:8082/report/"
})