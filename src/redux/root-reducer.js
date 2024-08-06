import {combineReducers} from 'redux'

import cartReducer from './cart/reducer'
import userReducer  from './user/signup/reducer';
import categoryReducer from './category/reducer'
import UserReducer from './user/signin/reducer';

const rootReducer = combineReducers({
    cart: cartReducer,
    user: userReducer,
    User:UserReducer,
    category:categoryReducer
})

export default  rootReducer;