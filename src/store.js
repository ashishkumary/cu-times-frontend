import { createStore, compose, applyMiddleware, combineReducers } from 'redux'
import data from './data'
import thunk from 'redux-thunk'
import { newsListReducers, newsDetailsReducer, addNewsReducer, newsDeleteReducer } from './reducers/newsReducers'
import { userSigninReducer, userSignupReducer, userEditReducer, userListReducer, userDetailsReducer, adminUserEditReducer, userDeleteReducer } from './reducers/userReducers'


const initialState = {
    userSignin: {
        userInfo: localStorage.getItem('userInfo') ? JSON.parse(localStorage.getItem('userInfo')) : null
    }
}

const reducer = combineReducers({
    newsList: newsListReducers,
    newsData: newsDetailsReducer,
    newsAdd: addNewsReducer,
    userSignin: userSigninReducer,
    userSignup: userSignupReducer,
    editProfile: userEditReducer,
    listUsers: userListReducer,
    detailsUser: userDetailsReducer,
    adminUserEdit: adminUserEditReducer,
    deleteUser: userDeleteReducer,
    deleteNews: newsDeleteReducer
})

const composeEnhancer = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;
const store = createStore(
    reducer,
    initialState,
    composeEnhancer(applyMiddleware(thunk))
);

export default store;