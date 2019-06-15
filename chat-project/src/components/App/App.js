import React from 'react';
import { Provider } from 'react-redux';
import Header from '../Header/header';
import Content from '../Content/content';
// import dbRef from '../../lib/dbRef';
import store from '../../lib/store';
import { initialiseListeners } from '../../lib/profile/actions'

// dbRef
//   .once('value')
//   .then(data => data.val())
//   .then(data => store.dispatch({ type: 'DATA_LOADED', data }));

store.dispatch(initialiseListeners());

const App = () => {
  return (
    <Provider store={store}>
      <div className="app-wrapper">
        <Header />
        <Content />
      </div>
    </Provider>
  );
};

export default App;
