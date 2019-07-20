import types from '../action-types'

export function login( data, history ){
    return {
        type: types.LOGIN,
        data,
        history
    }
}
export function setAdminInfo( data ){
    return {
        type: types.SET_ADMIN_INFO,
        data
    }
}
export function logout( history ){
    return {
        type: types.LOGOUT,
        history
    }
}

export function initInfo( history ){
    return{
        type: types.INIT_INFO,
        history
    }
}