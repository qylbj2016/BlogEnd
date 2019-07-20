import types from '../action-types'

const initState = {
    canAdd: false
}

export default ( state = initState, action ) => {
    switch ( action.type ) {
        case types.SET_USERS:
            return { ...state, users: action.data }
        case types.CHANGE_ADD_STATE:
            const newState = JSON.parse( JSON.stringify( state ) )
            newState.canAdd = ! newState.canAdd
            return newState
        default:
            return state
    }
}