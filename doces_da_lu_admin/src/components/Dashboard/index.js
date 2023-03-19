import React, { useState, useEffect, useMemo  } from 'react';
import { useDispatch, useSelector} from 'react-redux';
import { Container, Conteudo } from './styles'
import ViewProduto from '../ViewProduto';
import Pagination from '../Pagination/Pagination';
import { loadProdutos } from '~/store/modules/produtos/actions';

let PageSize = 6;


export default function Dashboard() {
  const [currentPage, setCurrentPage] = useState(1);
  const produtosList = useSelector(state => state.produtos.produtos);
  const currentListData = useMemo(() => {
    const firstPageIndex = (currentPage - 1) * PageSize;
    const lastPageIndex = firstPageIndex + PageSize;
    return produtosList.slice(firstPageIndex, lastPageIndex);
  }, [currentPage]);
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(loadProdutos())
  }, []);

  return (console.log(currentPage),
    <Container>
    <h1>Produtos Cadastrados</h1>
    <Conteudo>
     <ViewProduto currentListData={currentListData} />
    </Conteudo>
    <Pagination
        className="pagination-bar"
        currentPage={currentPage}
        totalCount={produtosList.length}
        pageSize={PageSize}
        onPageChange={page => setCurrentPage(page)}
        />
    </Container>
  );
}