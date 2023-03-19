import { all } from 'redux-saga/effects';
import auth from './auth/sagas';
import user from './user/sagas';
import carrinho from './carrinho/sagas'
import produtos from './produtos/reducer'

export default function* rootSaga() {
    return yield all ([auth, user, carrinho, produtos ])
}