import { api } from "./api"

export const getAllPostApi = async (params) => {
  return api.get('/posts', {params})
}