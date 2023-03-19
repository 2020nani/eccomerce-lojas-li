export function loadPedidos(data) {

    return {
      type: '@pedidos/PEDIDOS_REQUEST_SUCCESS',
      data   
    };
  }
  
  export function loadPedidoSuccess(data) {
     
    return {
      type: '@pedidos/LOAD_SUCCESS',
      data
    };
  }
