import types from '../action-types'

export function getUsers(){
    return {
        type: types.GET_USERS
    }
}

export function setUsers( data ){
    return {
        type: types.SET_USERS,
        data
    }
}

export function delUser( email ){
    return {
        type: types.DEL_USER,
        email
    }
}

export function addUser( data ){
    return {
        type: types.ADD_USER,
        data
    }
}

export function stopUser( data ){
    return {
        type: types.STOP_USER,
        data
    }
}

export function changeAddState() {
    return {
        type: types.CHANGE_ADD_STATE
    }
}