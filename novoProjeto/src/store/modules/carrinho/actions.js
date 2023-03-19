export function carrinhoRequest(data) {
    return {
      type: '@carrinho/CARRINHO_REQUEST',
      payload: { data },
      
    };
  }
  
  export function carrinhoRemover(id) {
   
    return {
      type: '@carrinho/REMOVER_DO_CARRINHO',
      id ,
    };
  }
  
  export function updateQuantidade(id, quantidade) {
  
    return {
      type: '@carrinho/UPDATE_QUANTIDADE',
      id,
      quantidade
    };
  }

  export function reset() {
    return {
    type: '@CARRINHO_RESET_STATE'
    }
  }
 
  