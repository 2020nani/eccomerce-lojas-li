import React, { useState, useEffect, useMemo } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import Pagination from '../Pagination/Pagination';
import { PedidosList } from './styles'
import { loadPedidos } from '~/store/modules/pedidos/actions';
import EditarProduto from '../EditarProduto';
import api from '~/services/api';

let PageSize = 6;

export default function ViewPedido() {
 
  const [editar, setEditar] = useState(false)
  const pedidosList = useSelector(state => state.pedidos.pedidos);
  const dispatch = useDispatch();
  const [currentPage, setCurrentPage] = useState(1);
  const currentListData = useMemo(() => {
    const firstPageIndex = (currentPage - 1) * PageSize;
    const lastPageIndex = firstPageIndex + PageSize;
    return pedidosList.slice(firstPageIndex, lastPageIndex);
  }, [currentPage]);

  useEffect(() => {
    dispatch(loadPedidos())
  }, []);

  function deletarProduto(id) {
    api.delete(`pedidos/${id}`)
  }

  return (
  <>
  {currentListData.map(pedidos =>
    <PedidosList key={pedidos.id}>
     <li key={pedidos.id}>
          <strong>ID: {pedidos.id}</strong>
          <span>Data: {pedidos.dataPedido}</span>
          <span>Quantidade: {pedidos.quantidadePedido}</span>
          <span>Valor: {pedidos.precoFormatado}</span>
          <span>Status: {pedidos.statusPedido}</span>
          <button type="button" onClick={() => setEditar(!editar)}>
            <span>Aceitar Pedido</span>
          </button>
          <button type="button" onClick={() => deletarProduto(pedidos.id)}>
            <span>Deletar Pedido</span>
          </button>
        </li>
    </PedidosList>
  )}
  <Pagination
        className="pagination-bar"
        currentPage={currentPage}
        totalCount={pedidosList.length}
        pageSize={PageSize}
        onPageChange={page => setCurrentPage(page)}
        />
  </>
  );
}