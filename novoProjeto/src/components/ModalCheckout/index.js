import React from 'react';
import { Link } from 'react-router-dom';
import { Container, Conteudo } from './styles'


export default function ModalCheckOut(props) {
   
    return (
        <Container>
            <Conteudo>
                <p> ****Parabens sua compra foi realizada com sucesso**** </p>
                <br />
                <hr />
                <p> \0/ \0/ Aproveite e curta seus novos games, diversao garantida </ p>
                <br />
                <hr />
                <p>Agradecemos por sua compra e continue navegando em nosso site clicando no botao abaixo</p>
                <br />
                <hr />
                <Link to ="/">
                <button type="button" > Confira nossas Ofertas </button>
                </Link>
            </Conteudo>
        </Container>
    );
}


