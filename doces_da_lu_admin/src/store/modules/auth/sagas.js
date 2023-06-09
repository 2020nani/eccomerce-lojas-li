import { takeLatest, call, put, all } from 'redux-saga/effects';
import { toast } from 'react-toastify';
import api from '../../../services/api';
import history from '../../../services/history';
import { signInSuccess, signFailure } from './actions';

/* funcao de logar usuario e adquirir token para acesso as rotas privasas */
export function* signIn({ payload }) {
  try {
    const { nome, senha } = payload;
    const response = yield call(api.post, 'login', {
      nome,
      senha,
    });
    
    const { token, user } = response.data;

    api.defaults.headers.Authorization = `Bearer ${token}`;
    
    yield put(signInSuccess(token, user));
    toast.success('Usuario autenticado com sucesso');
    history.push('/home');
  } catch (err) {
    toast.error('Falha na autenticação, verifique seu email/senha');
    yield put(signFailure());
  }
}

/* funcao de cadastrar usuario */
export function* signUp({ payload }) {
  try {
    const { nome, cpf, telefone, senha } = payload;
    const roles = [{
      "id": 2,
      "roleAcess": "ROLE_USER"
  }]
    yield call(api.post, 'usuario', {
      nome,
      cpf,
      telefone,
      senha,
      roles
    });
    toast.success('Usuario cadastrado com sucesso');
    history.push('/');
  } catch (err) {
    toast.error('Falha no cadastro verifique seus dados!');
    yield put(signFailure());
  }
}

/* function setar token para autenticacao e acesso as rotas privadas */
export function setToken({ payload }) {
  if (!payload) return;
  const { token } = payload.auth;
  if (token) {
    api.defaults.headers.Authorization = `Baerer ${token}`;
  }
}

/* define token como null e faz logout na pagina */
export function signOut() {
  api.defaults.headers.Authorization = null;
  history.push('/');
}

/* exporta as funcoes */
export default all([
  takeLatest('persist/REHYDRATE', setToken),
  takeLatest('@auth/SIGN_IN_REQUEST', signIn),
  takeLatest('@auth/SIGN_UP_REQUEST', signUp),
  takeLatest('@auth/SIGN_OUT', signOut),
]);
