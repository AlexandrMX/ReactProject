// import 'css/app.css';
import React, { useState } from 'react';
import { render } from 'react-dom';
import { createStore } from 'redux';
import { Provider } from 'react-redux';
import * as headings from './components/heading';
import List from './components/list';
import reducer from './reducer';
import Input from './components/input';
import Textarea from './components/textarea';
import AddButton from './components/add-button'
import styler from './app.component.css'


const store = createStore(
  reducer,
  window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()
);

const App = () => {
  // const [display, setDisplay] = useState(true);

  return (
    <Provider store={store}>
      <div className={styler.app}>
        <headings.Heading title="To Do List" />
        <div className={styler.input_container}>
          <headings.HeadingSmall title="Task name:" />
          <Input />
          <headings.HeadingSmall title='Task:' />
          <Textarea />
        </div>
        <AddButton title='ADD NEW TASK' />
       
        <List  />
      </div>
    </Provider>
  );
};

render(<App className={styler.app} />, document.getElementById('app'));
