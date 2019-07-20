import types from '../action-types'

export function getBlogs( tag ) {
    return {
        type: types.GET_BLOGS,
        tag
    }
}

export function delBlog( blog_id ){
    return {
        type: types.DEL_BLOG,
        blog_id
    }
}

export function upDtBlog( data ){
    return {
        type: types.UPDT_BLOG,
        data
    }
}

export function addBlog( data ){
    return {
        type: types.ADD_BLOG,
        data
    }
}

export function setBlogs( blogs ){
    return {
        type: types.SET_BLOGS,
        blogs
    }
}
export function changeEditState( blog, status ){
    return {
        type: types.CHANGE_EDIT_STATE,
        blog,
        status
    }
}
export function changeSearchType( item ){
    return {
        type: types.CHANGE_SEARCH_TYPE,
        item
    }
}