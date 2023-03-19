import React, { useEffect, useState } from 'react';
import { Container, ContainerGrid, ContainerGridMenu, ContainerGridConteudo, ButtonMenu } from './styles';
import { useDispatch, useSelector } from 'react-redux';
import Header from '../../components/Header';
import CadastroProduto from '../../components/CadastroProduto';
import { loadRoutes } from '~/store/modules/route/actions';
import Dashboard from '../../components/Dashboard';
import ViewPedido from '../../components/ViewPedido';
export default function Home() {
  const dispatch = useDispatch()
  const rota = useSelector(state => state.route.route)
  const produtos = useSelector(state => state.produtos)

  return (
    
    <Container>
      <Header />
      <ContainerGrid>
      <ContainerGridMenu>
      <ButtonMenu onClick={() => dispatch(loadRoutes("dashboard"))}>Dashboard</ButtonMenu>
        <ButtonMenu onClick={() => dispatch(loadRoutes("cadastro"))}>Cadastrar Produtos</ButtonMenu>
        <ButtonMenu onClick={() => dispatch(loadRoutes("vendas"))}>Vendas Hoje</ButtonMenu>
        <ButtonMenu onClick={() => dispatch(loadRoutes("relatorio"))}>Relatorios venda</ButtonMenu>
      </ContainerGridMenu>
      <ContainerGridConteudo>
        {rota === 'dashboard' ? <Dashboard /> : 
         rota === 'cadastro' ? <CadastroProduto /> : 
         rota === 'vendas' ? <ViewPedido /> : 
         rota === 'relatorio' ? <h2>vendas</h2> : <></>}
        
      
      </ContainerGridConteudo>
      </ContainerGrid>
     
    </Container>

  );
}