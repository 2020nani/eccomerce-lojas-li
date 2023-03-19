import React from 'react';
import { Router } from 'react-router-dom';
import GlobalStyle from './styles/global';
import Routes from './routes/index';
import Header from './components/Header';
import history from './services/history';
import { PersistGate } from 'redux-persist/integration/react'
import { ToastContainer } from 'react-toastify'
import { Provider } from 'react-redux'
import { store, persistor } from './store'


export default function App() {

  return (
    <Provider store={store}>
      <PersistGate persistor={persistor}>
      <Router history={history}> 
        <Routes />
        <GlobalStyle />
        < ToastContainer  autoClose={3000} />
      </Router>
      </PersistGate>
    </Provider>
  );
}
