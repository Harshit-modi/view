import merge from 'lodash/merge'

export default (state = { users: {}, pageCount: 0, isFetching: false }, action) => {
    switch (action.type) {
        case 'REQUEST':
            return {
                ...state,
                isFetching: true
            }

        case 'SUCCESS':
            if (action.response) {
                let newState = merge({}, state, action.response.entities)
                newState.pageCount = action.response.pageCount + 1
                newState.isFetching = false
                return newState
            }
            return {
                ...state,
                isFetching: false
            }
        case 'FAILURE':
            return {
                ...state,
                isFetching: false
            }
        default:
            return state;
    }
}