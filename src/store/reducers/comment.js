import types from '../action-types'

export default ( state={ }, action) => {
    switch ( action.type ){
        case types.SET_COMMENTS:
            return { ...state, comments: action.comments }
        default:
            return state
    }
}