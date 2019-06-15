import React from 'react';
import { Provider } from 'react-redux';
import Header from '../Header/header';
import Content from '../Content/content';
import store from '../../lib/store';
import { initialiseListeners } from '../../lib/profile/actions'


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
