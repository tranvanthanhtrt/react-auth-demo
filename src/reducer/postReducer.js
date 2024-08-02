import { FAILURE, POST_ACTION_TYPE, REQUEST, SUCCESS } from "../actions/action-types";

const initState = {
  loading: false,
  data: [],
  success:false
}
export const postReducer = (state=initState,  action) => {
  switch (action.type) {
    case REQUEST(POST_ACTION_TYPE.GET_POSTS):
        return {
            ...state,
            loading: true,
        }
    case SUCCESS(POST_ACTION_TYPE.GET_POSTS):
        console.log("reducer", action?.payload)
        return {
            ...state,
            loading: false,
            data: action?.payload?.data
        }
    case FAILURE(POST_ACTION_TYPE.GET_POSTS):
        return {
            ...state,
            loading: false,
            success: false,
        }
    default:
        return state;
  }
}