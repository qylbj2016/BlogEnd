import types from '../action-types'

export function getComments( blog_id ) {
    return {
        type: types.GET_COMMENTS,
        blog_id
    }
}
export function delComment( comment_id, blog_id ){
    return {
        type: types.DEL_COMMENT,
        comment_id,
        blog_id
    }
}
export function setComments( comments ){
    return {
        type: types.SET_COMMENTS,
        comments
    }
}