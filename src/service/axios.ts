import axios from "axios";

const baseURL = 'https://bitwit-eight.vercel.app'

const axiosInstance = axios.create({
    baseURL
})

export const api = {
    get: <T>(endpoint: string) => axiosInstance.get<T>(endpoint),
    post: <T, U>(endpoint: string, body: U) => axiosInstance.post<T>(endpoint, body),
    put: <T, U>(endpoint: string, body: U) => axiosInstance.put<T>(endpoint, body),
    delete: <T>(endpoint: string) => axiosInstance.delete<T>(endpoint),
};