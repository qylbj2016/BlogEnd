import { takeEvery } from 'redux-saga/effects'
import types from '../action-types'
import * as comment from './comment'
import * as blog from './blog'
import * as user from './user'
import * as identity from './identity'

export default function* rootSage(){
    yield takeEvery(types.GET_COMMENTS, comment.getComments)
    yield takeEvery(types.DEL_COMMENT, comment.delComment)
    yield takeEvery(types.GET_BLOGS, blog.getBlogs)
    yield takeEvery(types.DEL_BLOG, blog.delBlog)
    yield takeEvery(types.UPDT_BLOG, blog.upDtBlog)
    yield takeEvery(types.ADD_BLOG, blog.addBlog)
    yield takeEvery(types.GET_USERS, user.getUsers)
    yield takeEvery(types.DEL_USER, user.delUser)
    yield takeEvery(types.ADD_USER, user.addUser)
    yield takeEvery(types.STOP_USER, user.stopUser)
    yield takeEvery(types.LOGIN, identity.login)
    yield takeEvery(types.INIT_INFO, identity.initInfo)
}