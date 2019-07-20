import types from '../action-types'
import { delCookie } from '../../utils/optCookie'

const initState = {
    admin: null
}

export default (state=initState, action) => {
    const newState = JSON.parse( JSON.stringify( state ) )
    switch( action.type ){
        case types.SET_ADMIN_INFO:
            newState.admin = action.data.name
            return newState
        case types.LOGOUT:
            delCookie( 'CINCO' )
            action.history.push('/login')
            newState.admin = null
            return newState
        default:
            return state
    }
}