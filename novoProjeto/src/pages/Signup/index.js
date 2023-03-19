import React, { useState } from 'react';
import { useDispatch } from 'react-redux';
import { CheckBox, Container, Conteudo } from './styles'
import { Field, Form, Formik } from 'formik';
import { GiAtom } from "react-icons/gi";
import { Link } from 'react-router-dom';
import * as Yup from 'yup';
import logo from '~/assets/images/logo.jpeg';
import { signUpRequest } from '~/store/modules/auth/actions';

const schema = Yup.object().shape({
  nome: Yup.string()
    .required('O nome é obrigatório'),
  cpf: Yup.string()
    .matches('(^\\d{3}\\.\\d{3}\\.\\d{3}\\-\\d{2}$)|(^\\d{2}\\.\\d{3}\\.\\d{3}\\/\\d{4}\\-\\d{2}$)',
             'Cpf precisa estar formato xxx.xxx.xxx-xx')
    .required('O cpf é obrigatório'),
  telefone: Yup.string()
    .required('O telefone é obrigatória'),
  senha: Yup.string()
    .min(6, 'No mínimo 6 caracteres')
    .required('A senha é obrigatória'),
});

export default function SignUp() {
  const [background, setBackground] = useState("escuro")
  const dispatch = useDispatch();

  function defineBackground() {
    background == "escuro" ? setBackground("claro") : setBackground("escuro")
  }

  return (
    <Container theme={background}>
      <Conteudo>
        <div style={{ display: "flex", flexDirection: "column", justifyContent: "center", alignItems: "center" }}>
          <Link to="/">
            {background == "escuro" ? <img src={logo} width="300px" alt="devaria" />
              : <img src={logo} width="300px" alt="devaria" />}
          </Link>
          <div style={{ display: "flex", justifyContent: "center", alignItems: "center", marginTop: "5vh" }}>
            <span style={background == "escuro" ? { color: "white" } : { color: "black" }}>Já tem uma conta?</span>
            <Link to="/login"><span style={{ color: "orange" }}>Faça Login!</span></Link>
          </div>
        </div>
        <div>
          <div ><GiAtom  color='green' onClick={() => defineBackground()} /></div>
          <Formik
            initialValues={{
              nome:'',
              cpf: '',
              telefone: '',
              senha: ''
            }}
            validationSchema={schema}

            onSubmit={async (values) => {
              const { nome, cpf, telefone, senha } = values;

              dispatch(signUpRequest(nome, cpf, telefone, senha));

            }
            }
          >
            {({
              touched,
              errors,
              setFieldValue,
            }) => (
              <Form >
                <Field name="nome" placeholder="Digite seu nome" />
                {errors.nome && touched.nome ? (<div style={background == "escuro" ? { color: "white" } : { color: "black" }}>{errors.nome}</div>) : null}

                <Field name="cpf" placeholder="Digite seu cpf (Ex: xxx.xxx.xxx-xx)" />
                {errors.cpf && touched.cpf ? (<div style={background == "escuro" ? { color: "white" } : { color: "black" }}>{errors.cpf}</div>) : null}

                <Field name="telefone" placeholder="Digite seu telefone" />
                {errors.telefone && touched.telefone ? (<div style={background == "escuro" ? { color: "white" } : { color: "black" }}>{errors.telefone}</div>) : null}

                <Field name="senha" placeholder="Digite sua senha" />
                {errors.senha && touched.senha ? (<div style={background == "escuro" ? { color: "white" } : { color: "black" }}>{errors.senha}</div>) : null}

                <button type="submit">{'Cadastrar'}</button>

              </Form>
            )}
          </Formik>
        </div>
      </Conteudo>
    </Container>
  );
}
