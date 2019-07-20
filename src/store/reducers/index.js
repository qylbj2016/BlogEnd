import { combineReducers } from 'redux'
import comment from './comment'
import blog from './blog'
import user from './user'
import identity from './identity'

export default combineReducers({
    comment,
    blog,
    user,
    identity
})
