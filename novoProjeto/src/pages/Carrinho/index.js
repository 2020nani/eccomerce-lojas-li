import React, {useState} from 'react';
import { Container, TabelaJogo, Total } from './styles';
import { MdRemoveCircleOutline, MdAddCircleOutline, MdDelete } from 'react-icons/md';
import { formataPreco } from '../../Util/format';
import { useDispatch, useSelector } from 'react-redux';
import { carrinhoRemover, updateQuantidade } from '~/store/modules/carrinho/actions';
import Checkout from '../../components/Checkout/index'

export default function Carrinho() {
  const [checkout, setCheckout] = useState(false)
  const dispatch = useDispatch()
  const jogosEscolhidos = useSelector(state => state.carrinho.map(car => ({
    ...car,
    subtotal: formataPreco(car.price * car.quantidade),
  })));
  const frete = useSelector(state =>
    state.carrinho.reduce((totalSoma, car) => {
      if(totalSoma + car.price * car.quantidade < 250){
      return totalSoma + 10 * car.quantidade ;
      }else {
        return 0
      }
    }, 0)
  )
  const total = useSelector(state =>
    state.carrinho.reduce((totalSoma, car) => {
      return totalSoma + car.price * car.quantidade ;
    }, 0)
  )
  const freteFormatado = formataPreco(frete)
  const totalFormatado = formataPreco(total)
 


  function deleteJogoCarrinho(id) {
    dispatch(carrinhoRemover(id));
  }

  function aumentaQuantidade(jogo) {
    dispatch(updateQuantidade(jogo.id, jogo.quantidade + 1));
  }

  function diminuiQuantidade(jogo) {
    dispatch(updateQuantidade(jogo.id, jogo.quantidade - 1));
  }

  return (
    checkout == false ?
    <Container>


      <TabelaJogo>
        <thead>
          <tr>
            <th />
            <th>JOGO</th>
            <th>QTD</th>
            <th>SUBTOTAL</th>
            <th />
          </tr>
        </thead>
        <tbody>
          {jogosEscolhidos.map(jogo => (
            <tr>
              <td>
                <img src={jogo.image} alt={jogo.name} />
              </td>
              <td>
                <strong>{jogo.name}</strong>
                <span>{jogo.precoFormatado}</span>
              </td>
              <td>
                <div>
                  <button type="button" onClick={() => diminuiQuantidade(jogo)}>
                    <MdRemoveCircleOutline size={20} color="0000" />
                  </button>
                  <input type="number" readOnly value={jogo.quantidade} />
                  <button type="button" onClick={() => aumentaQuantidade(jogo)}>
                    <MdAddCircleOutline size={20} color="0000" />
                  </button>
                </div>
              </td>
              <td>
                <strong>{jogo.subtotal}</strong>
              </td>
              <td>
                <button type="button" onClick={() => deleteJogoCarrinho(jogo.id)}>
                  <MdDelete size={20} color="0000" />
                </button>
              </td>
            </tr>
          ))}
        </tbody>

      </TabelaJogo>

      <footer>
        <button type="button" onClick={() => setCheckout(true)}> FINALIZAR PEDIDO</button>

        <Total>

          <span>FRETE</span>
          {parseInt(total) < 250 ? 
          <strong>{freteFormatado}</strong>
          :<strong>0</strong> }
          <span>TOTAL GAMES</span>
          <strong>{totalFormatado} </strong>
        </Total>
      </footer>
    </Container>
 : <Checkout>{[jogosEscolhidos, parseInt(frete), parseFloat(total)]}</Checkout>
  );
}