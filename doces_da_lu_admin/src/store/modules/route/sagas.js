import { takeLatest, call, put, all } from 'redux-saga/effects';
import { toast } from 'react-toastify';
import { loadRoutesSuccess } from './actions'

/* funcao que atualiza rota*/
export function* atualizaRotas({data}) {
  
  try {
    yield put(loadRoutesSuccess(data))
  } catch (error) {
    toast.error('Erro ao atualizar Rota');
  }
}



/* exporta as funcoes redux */
export default all([
  takeLatest('@routes/REQUEST_SUCCESS', atualizaRotas),
  ]);
  