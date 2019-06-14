import React from 'react';
import { Provider } from 'react-redux';
import Header from '../Header/header';
import Navbar from '../Navbar/navbar';
import Content from '../Content/content';
import dbRef from '../../lib/dbRef';
import store from '../../lib/store';

dbRef
  .once('value')
  .then(data => data.val())
  .then(data => store.dispatch({ type: 'DATA_LOADED', data }));


const App = () => {
  return (
    <Provider store={store}>
      <div className="app-wrapper">
        <Header />
        <Navbar />
        <Content />
      </div>
    </Provider>
  );
}

export default App;
