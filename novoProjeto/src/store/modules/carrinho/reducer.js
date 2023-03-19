import produce from 'immer';
export default function carrinho(state = [], action) {

  switch (action.type) {
    case '@carrinho/CARRINHO_REQUEST':
      return produce(state, draft => {

        const produtoIndex = draft.findIndex(p => p.id === action.payload.data.id);
        if (produtoIndex >= 0) {
          draft[produtoIndex].quantidade += 1;
        } else {
          draft.push({
            ...action.payload.data,
            quantidade: 1
          });
        }
      });

    case '@carrinho/REMOVER_DO_CARRINHO':
      return produce(state, draft => {
        const produtoIndex = draft.findIndex(p => p.id === action.id);
        if (produtoIndex >= 0) {
          draft.splice(produtoIndex, 1);
        }
      });

    case '@carrinho/UPDATE_QUANTIDADE': {
      if(action.quantidade <= 0){
        return state
      }
      return produce(state, draft => {

        const produtoIndex = draft.findIndex(p => p.id === action.id);
        if (produtoIndex >= 0) {
          draft[produtoIndex].quantidade = Number(action.quantidade);
        }
      });
    }

    case '@CARRINHO_RESET_STATE':
      return state = []; //Always return the initial state
    default:
      return state
  }
}