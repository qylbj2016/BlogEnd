import types from '../action-types'

const initState = {
    canEdit: false,
    editedBlog: null,
    status: 1,  // 1更改, 2新建
    searchType: 'tag'
}

export default ( state = initState, action ) => {
    const newState = JSON.parse( JSON.stringify( state ) )
    switch ( action.type ) {
        case types.SET_BLOGS :
            return { ...state, blogs: action.blogs }
        case types.CHANGE_EDIT_STATE:
            newState.canEdit = ! newState.canEdit
            newState.editedBlog = action.blog
            newState.status = action.status
            return newState
        case types.CHANGE_SEARCH_TYPE:
            newState.searchType = action.item
            return newState
        default:
            return state
    }
}