import { POST_ACTION_TYPE } from "./action-types"
import { getAllPostApi } from "../services/posts"
export const getALlPostAction = () => ({
  type: POST_ACTION_TYPE.GET_POSTS,
  payload: getAllPostApi()
})