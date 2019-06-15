import React from 'react';
import { Provider } from 'react-redux';
import { createStore, applyMiddleware } from 'redux';
import Header from './components/Header/header';
import Navbar from './components/Navbar/navbar';
import Content from './components/Content/content';
import reducer from './reducer';
import dbRef from './dbRef';

const store = createStore(
  reducer,
  applyMiddleware(({ getState, dispatch }) => next => action => {
    console.log(typeof action, '!!!!!!!!')
    if (typeof action === 'function') {
      const plainAction = action({ getState, dispatch });
      console.log(plainAction.type, plainAction);
      next(plainAction);
    } else {
      console.log(action.type, action);
      next(action);
    }
  })
);



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
