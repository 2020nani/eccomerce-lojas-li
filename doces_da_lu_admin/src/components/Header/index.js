import React, {useState,useEffect} from 'react';
import { Link } from 'react-router-dom';
import { MdShoppingBasket } from 'react-icons/md';
import { 
  Container,
  Cart, 
  Button,
  ContainerGrid,
  ContainerGridMenu,
  ContainerGridConteudo } from './styles';
import { useDispatch, useSelector } from 'react-redux';
import { formataPreco } from '../../Util/format';
import { loadProdutos } from '~/store/modules/produtos/actions';
import logo from '../../assets/images/logo.jpeg'
import api from '../../services/api'



function Header() {
const dispatch = useDispatch();
const profile = useSelector(state => state.user.profile);
const games = useSelector(state => state.produtos)

useEffect(() => {
  loadProduto()
}, []);
async function loadProduto() {
  const responseRequest = await api.get('produtos').catch(err => {console.log(err)}).then(res => res.data.content)
  
  const data = responseRequest.map(data => ({
    ...data,
    precoFormatado: formataPreco(data.preco)
  }))
  
  dispatch(loadProdutos(data));
  
}

function pesquisarProdutos(produto){
  
  let produtos = games.jogos.filter(games => games.name.toLowerCase().includes(produto.toLowerCase()))
  console.log(produtos)
  /*let produtos = games.jogos.contains(produto)
  console.log(produtos)
  dispatch(loadJogos(produtos));*/

}
function ordenarPreco(){
  let ordenarPreco = games.jogos.slice().sort(function(a, b) {
    if (a.price < b.price) {
      return -1;
    }
    if (a.price > b.price) {
      return 1;
    }
    // são idênticos
    return 0;
  })
  dispatch(loadProdutos(ordenarPreco));

}
function ordenarScore(){
  let ordenarScore = games.jogos.slice().sort(function(a, b) {
    if (b.score < a.score) {
      return -1;
    }
    if (b.score > a.score) {
      return 1;
    }
    // são idênticos
    return 0;
  })
  dispatch(loadProdutos(ordenarScore));

}
  
  return (
    
    <Container>
      <ContainerGrid>
        <ContainerGridConteudo size={1} align="center">
          <div>
            <Link to="home">
              {' '}
              <img src={logo} alt="logo" />
            </Link>
          </div>
        </ContainerGridConteudo>
        <ContainerGridConteudo size={2} align="space-around">
          <div>
            <strong>Usuario: {profile.nome} </strong>
          </div>
          <div>
            <Link to="profile"> Perfil</Link>
          </div>
        </ContainerGridConteudo>
      </ContainerGrid>

    </Container>
  );
}


export default Header;