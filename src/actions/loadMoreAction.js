import { CALL_API, Schemas } from '../middleware/api'

export const USER_REQUEST = 'REQUEST'
export const USER_SUCCESS = 'SUCCESS'
export const USER_FAILURE = 'FAILURE'

const fetchUser = () => ({
    [CALL_API]: {
        types: [USER_REQUEST, USER_SUCCESS, USER_FAILURE],
        endpoint: `?page=1&results=20&seed=test`,
        schema: Schemas.USER_ARRAY
    }
})


export const loadInitData = () => dispatch => {
    return dispatch(fetchUser())
}

export const STARRED_REQUEST = 'REQUEST'
export const STARRED_SUCCESS = 'SUCCESS'
export const STARRED_FAILURE = 'FAILURE'

const fetchMoreUsers = (nextPageUrl) => ({
    [CALL_API]: {
        types: [STARRED_REQUEST, STARRED_SUCCESS, STARRED_FAILURE],
        endpoint: nextPageUrl,
        schema: Schemas.USER_ARRAY
    }
})

export const loadMoreData = () => (dispatch, getState) => {
    const {
        pageCount = 0
    } = getState() || {}

    const nextPageUrl = `?page=` + pageCount + `&results=20&seed=test`;

    return dispatch(fetchMoreUsers(nextPageUrl))
}