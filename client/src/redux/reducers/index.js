import {combineReducers} from 'redux'
import authChangeReducer from './authChange'
import messageErrorReducer from './messageError'
import sidebarChangeReducer from './sidebarChange'
import setUsersReducer from './setUsers'

const rootReducer = combineReducers({
    authChange: authChangeReducer,
    messageError: messageErrorReducer,
    sidebarChange: sidebarChangeReducer,
    setUsers: setUsersReducer
})

export default rootReducer