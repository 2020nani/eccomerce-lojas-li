import produce from 'immer';
const INITIAL_STATE = {
  route: 'cadastro'
};

export default function admim(state = INITIAL_STATE, action) {
  return produce(state, draft => {
    
    switch (action.type) {
      case '@routes/LOAD_SUCCESS': {
        draft.route = action.data
        break
      }  
      default:
    }
  });
}