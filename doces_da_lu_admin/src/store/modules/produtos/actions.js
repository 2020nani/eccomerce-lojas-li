export function loadProdutos(data) {

    return {
      type: '@produtos/PRODUTOS_REQUEST_SUCCESS',
      data   
    };
  }
  
  export function loadProdutoSuccess(data) {
     
    return {
      type: '@produtos/LOAD_SUCCESS',
      data
    };
  }

  export function cadastraProdutos(data) {

    return {
      type: '@produtos/PRODUTOS_REQUEST_CADASTRO',
      payload: data
    }

  }

  export function editaProdutos(data) {

    return {
      type: '@produtos/PRODUTOS_REQUEST_EDITAR',
      payload: data
    }

  }

  export function deletaProdutos(data) {

    return {
      type: '@produtos/PRODUTOS_REQUEST_DELETAR',
      payload: data
    }

  }