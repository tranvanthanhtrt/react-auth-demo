
export const POST_ACTION_TYPE = {
    GET_POSTS: 'GET_POSTS',
};


export const REQUEST = (actionType) => `${actionType}_PENDING`;

/**
 * Appends SUCCESS async action type
 */

export const SUCCESS = (actionType) => `${actionType}_FULFILLED`;

/**
 * Appends FAILURE async action type
 */

export const FAILURE = (actionType) => `${actionType}_REJECTED`;