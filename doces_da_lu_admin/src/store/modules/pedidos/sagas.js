import { takeLatest, call, put, all } from 'redux-saga/effects';
import { toast } from 'react-toastify';
import { loadPedidoSuccess } from './actions'
import api from '~/services/api';
import { formataPreco } from '../../../Util/format';

/* funcao que busca pedidos Cadastrados */
export function* getpedidos() {
  try {
    const response = yield call(api.get, 'pedidos');
    const data = response.data.content.map(data => ({
      ...data,
      precoFormatado: formataPreco(data.valorTotal)
    }))
    yield put(loadPedidoSuccess(data));
    
  } catch (error) {
    toast.error('Erro ao buscar pedidos');
    
  }
}

/* exporta as funcoes sagas */
export default all([
  takeLatest('@pedidos/PEDIDOS_REQUEST_SUCCESS', getpedidos)
  ]);
  