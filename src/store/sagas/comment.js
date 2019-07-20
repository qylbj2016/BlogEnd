import { put } from 'redux-saga/effects'
import * as actions from '../actions/comment'
import api from '../../utils/api'

export function* getComments( { blog_id } ) {
    const res = yield api({
        method: 'GET',
        url: `http://localhost:3001/getComments?blog_id=${blog_id}`
    })
    yield put(actions.setComments( res.data ))
}
export function* delComment( { comment_id, blog_id } ){
    const res = yield api({
        method: 'GET',
        url: `http://localhost:3001/delComment?comment_id=${comment_id}&blog_id=${blog_id}`
    })
    yield put(actions.setComments( res.data ))
}