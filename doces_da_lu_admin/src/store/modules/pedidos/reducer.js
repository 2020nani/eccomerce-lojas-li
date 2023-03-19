import produce from 'immer';
const INITIAL_STATE = {
  pedidos: [],
};

export default function admim(state = INITIAL_STATE, action) {
  return produce(state, draft => {
    
    switch (action.type) {
      case '@pedidos/LOAD_SUCCESS': {
        draft.pedidos = action.data
        break
      }  
      default:
    }
  });
}