/*armazenando dados no storage do browser do usuario */

import storage from 'redux-persist/lib/storage';
import { persistReducer } from 'redux-persist';

export default reducers => {
  const persistedReducer = persistReducer(
    {
      key: 'lojaslu',
      storage,
      whitelist: ['auth', 'user', 'carrinho'],
    },
    reducers
  );

  return persistedReducer;
};
