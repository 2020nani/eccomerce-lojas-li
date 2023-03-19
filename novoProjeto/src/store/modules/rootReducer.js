import { combineReducers } from 'redux'

import carrinho from './carrinho/reducer'
import produtos from './produtos/reducer'
import auth from './auth/reducer';
import user from './user/reducer';


export default combineReducers({
    auth,
    user,
    carrinho,
    produtos
})