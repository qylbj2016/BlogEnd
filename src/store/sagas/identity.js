import { put } from 'redux-saga/effects'
import * as actions from '../actions/identity'
import api from '../../utils/api'

export function* login({ data, history }){
    const res = yield api({
        method: 'POST',
        url: 'http://localhost:3001/login',
        data: {
            name: data.username,
            pwd: data.password
        },
        withCredentials: true
    })
    if( res.data.status === 1 ){
        yield put( actions.setAdminInfo( res.data ) )
        yield history.push('/admin')
    }else{
        alert('登陆失败')
    }
}

export function* initInfo({ history }){
    const res = yield api({
        method: 'GET',
        url: 'http://localhost:3001/initInfo',
        withCredentials: true
    })
    if( res.data.status === 1 ){
        yield put( actions.setAdminInfo( res.data ) )
    }else{
        history.push('/login')
    }
}