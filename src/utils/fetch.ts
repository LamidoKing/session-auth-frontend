import axios from "axios"
import baseURL from "./urls"

const instance = axios.create({
  baseURL,
  withCredentials: true,
})

const get = async (url: string) => {
  const response = await instance({
    method: "GET",
    url,
  })

  return response
}

const post = async (url: string, data: any) => {
  const response = await instance({
    method: "POST",
    url,
    data,
  })

  return response
}

const patch = async (url: string, data: any) => {
  const response = await instance({
    method: "PATCH",
    url,
    data,
  })

  return response
}

const del = async (url: string) => {
  const response = await instance({
    method: "DELETE",
    url,
  })

  return response
}

export { get, post, patch, del }
