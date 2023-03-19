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