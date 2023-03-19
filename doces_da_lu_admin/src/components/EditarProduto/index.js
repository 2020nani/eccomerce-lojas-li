import React, { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { Link } from 'react-router-dom';
import { Container, Conteudo } from './styles'
import { Field, Form, Formik } from 'formik';
import { editaProdutos } from '~/store/modules/produtos/actions';
import * as Yup from 'yup';

const schema = Yup.object().shape({
  nome: Yup.string()
    .min(6, 'No mínimo 6 caracteres')
    .required('O e-mail é obrigatório'),
  categoria: Yup.string()
    .required('A categoria e obrigatoria'),
  preco: Yup.number()
    .required('Preco e obrigatorio')
    .min(1, 'Valor tem que ser maior que zero'),
  quantidade: Yup.number()
    .required('Quantidade e obrigatorio')
    .min(1, 'Valor tem que ser maior que zero'),
  pathImagem: Yup.string()
    //.required('A imagem e obrigatoria'),
});

export default function EditarProduto({produto, setEditar}) {
const [loading, setLoading] = useState(false);
  const dispatch = useDispatch();

  return (
    <Container>

      <Conteudo>
        <div>
        <div>Editar Produto</div>
          <Formik
            initialValues={{
              id: produto.id,
              nome: produto.nome,
              categoria: produto.categoria,
              preco: produto.preco,
              quantidade: produto.quantidade,
              pathImagem: produto.image,
            }}
            validationSchema={schema}
            /* funcao loga usuario */
            onSubmit={async (values, actions) => {
              dispatch(editaProdutos(values))
            }
            }
          >
            {({
              touched,
              errors,

            }) => (
              <Form >

                <Field name="nome" placeholder="Digite seu nome" />
                {errors.nome && touched.nome ? (<div>{errors.nome}</div>) : null}

                <Field type="text" name="categoria" placeholder="Digite qual categoria pertence" />
                {errors.categoria && touched.categoria ? (<div >{errors.categoria}</div>) : null}

                <Field type="text" name="preco" placeholder="Entre com valor do preco" />
                {errors.preco && touched.preco ? (<div >{errors.preco}</div>) : null}

                <Field type="number" name="quantidade" placeholder="Quantidade do produto" />
                {errors.quantidade && touched.quantidade ? (<div >{errors.quantidade}</div>) : null}

                <Field type="file" name="pathImagem" placeholder="Entre com sua imagem" />
                {errors.pathImagem && touched.pathImagem ? (<div >{errors.pathImagem}</div>) : null}

                <button type="submit">{loading ? 'Carregando..' : 'Cadastrar'}</button>

                <button type="button" onClick={() => setEditar(false)}>Cancelar Edicao</button>


              </Form>
            )}
          </Formik>  
        </div>
      </Conteudo>
    </Container>
  );
}