import React, { useEffect, useState } from 'react';
import { MdAddShoppingCart } from 'react-icons/md';
import { ProdutosList } from './styles';
import { useDispatch, useSelector } from 'react-redux';
import { carrinhoRequest } from '~/store/modules/carrinho/actions'
import file from '~/assets/images/logo.jpeg'
export default function Home() {
  const dispatch = useDispatch()
  const quantiaproduto = useSelector(state =>
    state.carrinho.reduce((somaquantia, game) => {
      console.log(game)
      somaquantia[game.id] = game.quantidade;
      return somaquantia;
    }, {})
  );
 
  const produtos = useSelector(state => state.produtos)


  function addCarrinho(produto){
    dispatch(carrinhoRequest(produto));
  }
  

  return (
    <ProdutosList>
      {produtos.produtos.map(produto => (
        <li key={produto.id}>
          {produto.imagem != '' ? 
          <img width="300px" height="300px" object-fit="contain" src={require(`~/assets/images/${produto.imagem}`)} alt={produto.name}/> :
          <img width="300px" height="300px" object-fit="contain" src='' alt={produto.name}/>}
          <span>Categoria: {produto.categoria}</span>
          <span>Produto: {produto.nome}</span>
          <span> Preco: {produto.precoFormatado}</span>
          <span>ESTOQUE: {produto.quantidade} un</span>
          <button type="button" onClick={() => addCarrinho(produto)}>
            <div>
              <MdAddShoppingCart size={16} color="#FFF" /> 
              {quantiaproduto[produto.id] || 0}
            </div>
            <span>ADICIONAR AO CARRINHO</span>
          </button>
        </li>
      ))}
     
    </ProdutosList>

  );
}