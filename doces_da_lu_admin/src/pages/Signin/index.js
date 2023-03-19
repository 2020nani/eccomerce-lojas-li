import React, { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { Link } from 'react-router-dom';
import { Container, Conteudo } from './styles'
import { Field, Form, Formik } from 'formik';
import { GiAtom } from "react-icons/gi";
import * as Yup from 'yup';

import { signInRequest } from '~/store/modules/auth/actions';
import logo from '~/assets/images/logo.jpeg';

const schema = Yup.object().shape({
  nome: Yup.string()
    .min(6, 'No mínimo 6 caracteres')
    .required('O e-mail é obrigatório'),
  password: Yup.string()
    .required('A senha é obrigatória')
    .min(6, 'No mínimo 6 caracteres'),
});

export default function SignIn() {
  const [background, setBackground] = useState("escuro")
  const dispatch = useDispatch();
  const loading = useSelector(state => state.auth.loading);

  function defineBackground() {
    background == "escuro" ? setBackground("claro") : setBackground("escuro")
  }

  return (
    <Container theme={background}>

      <Conteudo>
        <Link to="/">
          {background == "escuro" ? <img src={logo} width="300px" alt="devaria" />
            : <img src={logo} width="300px" alt="devaria" />}
        </Link>
        <div>
          <div><GiAtom color='green' onClick={() => defineBackground()} /></div>
          <Formik
            initialValues={{
              nome: '',
              password: '',
            }}
            validationSchema={schema}
            /* funcao loga usuario */
            onSubmit={async (values, actions) => {
              const { nome, password } = values;

              dispatch(signInRequest(nome, password));
            }
            }
          >
            {({
              touched,
              errors,

            }) => (
              <Form >

                <Field name="nome" placeholder="Digite seu nome" />
                {errors.nome && touched.nome ? (<div style={background == "escuro" ? { color: "white" } : { color: "black" }}>{errors.nome}</div>) : null}

                <Field type="password" name="password" placeholder="Digite sua senha" />
                {errors.password && touched.password ? (<div style={background == "escuro" ? { color: "white" } : { color: "black" }}>{errors.password}</div>) : null}

                <button type="submit">{loading ? 'Carregando..' : 'Entrar'}</button>

                <Link to="/cadastro">Criar conta gratuita</Link>


              </Form>
            )}
          </Formik>
        </div>
      </Conteudo>
    </Container>
  );
}