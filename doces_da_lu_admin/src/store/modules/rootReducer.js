import { combineReducers } from 'redux'

import produtos from './produtos/reducer'
import auth from './auth/reducer';
import user from './user/reducer';
import route from './route/reducer';
import pedidos from './pedidos/reducer';


export default combineReducers({
    auth,
    user,
    produtos,
    route,
    pedidos
})