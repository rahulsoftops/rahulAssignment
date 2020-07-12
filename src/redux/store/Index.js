import { applyMiddleware,createStore,combineReducers } from 'redux'
import thunk from 'redux-thunk'
import randomIdReducer from '../reducer/randomIdReducer'
import astroidIdReducer from '../reducer/astroidIdReducer'
const rootReducer = combineReducers({
randomIdReducer,
astroidIdReducer
})

export default store = createStore(rootReducer, applyMiddleware(thunk))