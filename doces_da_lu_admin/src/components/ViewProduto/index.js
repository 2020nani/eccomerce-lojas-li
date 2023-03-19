import React, { useState, useEffect } from 'react';
import { useDispatch} from 'react-redux';
import { ProdutosList } from './styles'
import EditarProduto from '../EditarProduto';
import { deletaProdutos } from '~/store/modules/produtos/actions';
import api from '~/services/api';

export default function ViewProduto({currentListData}) {
  const [editar, setEditar] = useState(false)
  
  const dispatch = useDispatch();

  async function deletarProduto(id) {
    await dispatch(deletaProdutos(id))
  }

  return (
  <>
  {currentListData.map(produtos =>
    !editar ?
    <ProdutosList key={produtos.id}>
     <li key={produtos.id}>
          <strong>{produtos.nome}</strong>
          <span>Categoria: {produtos.categoria}</span>
          <span>Preco {produtos.precoFormatado}</span>
          <span>Quantidade {produtos.quantidade}</span>
          <button type="button" onClick={() => setEditar(!editar)}>
            <span>Editar Produto</span>
          </button>
          <button type="button" onClick={() => deletarProduto(produtos.id)}>
            <span>Deletar Produto</span>
          </button>
        </li>
    </ProdutosList>
       :
       <EditarProduto
        setEditar={setEditar}
        produto={produtos}
        />
  )}
  
  </>
  );
}