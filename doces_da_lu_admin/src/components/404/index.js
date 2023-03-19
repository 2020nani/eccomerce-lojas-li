import React from 'react';
import { Link } from 'react-router-dom';
import { Container, Conteudo } from './styles'


export default function Notfound() {
   
    return (
        <Container>
            <Conteudo>
                <h1>Parece que voce esta no mundo da lua pequeno padwan</h1>
                <br />
                <hr />
                <Link to ="/">
                <button type="button" > Volte ao nosso mundo </button>
                </Link>
            </Conteudo>
        </Container>
    );
}

