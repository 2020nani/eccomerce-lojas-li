import { takeLatest, call, put, all } from 'redux-saga/effects';
import { toast } from 'react-toastify';
import { loadProdutoSuccess } from './actions'
import api from '~/services/api';
import history from '../../../services/history';
import { formataPreco } from '../../../Util/format';

/* funcao que cadastra produto */
export function* cadastrarProduto({ payload }) {
  const { nome, categoria, quantidade, pathImagem } = payload;
  try {
    yield call(api.post, 'produtos', {
      nome,
      categoria,
      preco : 22.00,
      quantidade,
      fileBase64 : "tete"
    });
  } catch (error) {
    toast.error('Erro ao cadastrar Produto');
  }
}

/* funcao que atualiza produto */
export function* editarProduto({ payload }) {
  const { id, nome, preco, categoria, quantidade, pathImagem } = payload;
  try {
    yield call(api.put, `produtos/${id}`, {
      nome,
      categoria,
      preco,
      quantidade,
      imagem: pathImagem
    });

    history.push('/');
  } catch (error) {
    toast.error('Erro ao atualizar Produto');
  }
}

/* funcao que busca produtos Cadastrados */
export function* getProdutos() {
  try {
    const response = yield call(api.get, 'produtos');
    const data = response.data.content.map(data => ({
      ...data,
      precoFormatado: formataPreco(data.preco)
    }))
    yield put(loadProdutoSuccess(data));
    
  } catch (error) {
    toast.error('Erro ao deletar Perfil');
    
  }
}

/* funcao que deleta produto */
export function* deletaProduto({payload}) {
 try {
    const message = yield call(api.delete, `produtos/${payload}`);
    toast.success("Deletado com sucesso");
  } catch (error) {
    toast.error('Erro ao deletar Produto');
    
  }
  history.push('/');
}

/* exporta as funcoes update e delete profile */
export default all([
  takeLatest('@produtos/PRODUTOS_REQUEST_CADASTRO', cadastrarProduto),
  takeLatest('@produtos/PRODUTOS_REQUEST_EDITAR', editarProduto),
  takeLatest('@produtos/PRODUTOS_REQUEST_SUCCESS', getProdutos),
  takeLatest('@produtos/PRODUTOS_REQUEST_DELETAR', deletaProduto)
  ]);
  