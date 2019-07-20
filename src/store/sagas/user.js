import { put } from 'redux-saga/effects'
import * as actions from '../actions/user'
import api from '../../utils/api'

export function* getUsers() {
    const res = yield api({
        method: 'GET',
        url: 'http://localhost:3001/getUsers'
    })
    yield put( actions.setUsers( res.data ) )
}

export function* delUser( { email } ) {
    const res = yield api({
        method: 'GET',
        url: `http://localhost:3001/delUser?email=${email}`
    })
    yield put( actions.setUsers( res.data ) )
}

export function* addUser( { data } ) {
    const res = yield api({
        method: 'POST',
        url: 'http://localhost:3001/addUser',
        data
    })
    yield put( actions.setUsers( res.data ) )
}

export function* stopUser( { data } ){
    const res = yield api({
        method: 'POST',
        url: 'http://localhost:3001/stopUser',
        data
    })
    yield put( actions.setUsers( res.data ) )
}