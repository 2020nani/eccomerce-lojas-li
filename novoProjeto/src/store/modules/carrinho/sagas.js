/*import { takeLatest, call, put, all } from 'redux-saga/effects';
import { toast } from 'react-toastify';
import api from '~/services/api';
import {addCarrinhoSucess} from './actions';

/* funcao que requisita update do admin para o servidor */
/*export function* addCarrinho(payload ) {
  try {
   
 
    yield put(addCarrinhoSucess(payload));
  } catch (error) {
    toast.error('Erro ao atualizar Perfil');
  }
}*/

/* funcao que faz requisicao de deletar admin */
/*export function* profileDelete({ payload }) {
  try {
    
    const  id  = payload.id;
   
    yield call(api.delete, `admins/${id}`);
  
    toast.success('Perfil deletado com sucesso!');

   // yield put(signOut());
    
  } catch (error) {
    toast.error('Erro ao deletar Perfil');
    
  }
}

/* exporta as funcoes update e delete profile */
/*export default all([
  takeLatest('@carrinho/CARRINHO_REQUEST', addCarrinho),
  //takeLatest('@user/DELETE_PROFILE', profileDelete)
  ]);*/
  