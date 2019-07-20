import { put } from 'redux-saga/effects'
import * as actions from '../actions/blog'
import api from '../../utils/api'

export function* getBlogs( { tag } ){
    const res = yield api({
        method: 'GET',
        url: `http://localhost:3001/getBlogs?tag=${tag}`
    })
    yield put( actions.setBlogs( res.data ) )
}

export function* delBlog( { blog_id, tag } ){
    const res = yield api({
        method: 'GET',
        url: `http://localhost:3001/delBlog?blog_id=${blog_id}`
    })
    yield put( actions.setBlogs( res.data ) )
}
export function* upDtBlog( { data } ){
    const res = yield api({
        method: 'POST',
        url: 'http://localhost:3001/upDtBlog',
        data
    })
    yield put( actions.setBlogs( res.data ) )
}
export function* addBlog( { data } ){
    const res = yield api({
        method: 'POST',
        url: 'http://localhost:3001/addBlog',
        data
    })
    yield put( actions.setBlogs( res.data ) )
}