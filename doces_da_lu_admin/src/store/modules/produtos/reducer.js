import produce from 'immer';
const INITIAL_STATE = {
  produtos: [],
};

export default function admim(state = INITIAL_STATE, action) {
  return produce(state, draft => {
    
    switch (action.type) {
      case '@produtos/LOAD_SUCCESS': {
        draft.produtos = action.data
        break
      }  
      default:
    }
  });
}