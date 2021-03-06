import React from 'react';
import ReactDOM from 'react-dom';
import 'assets/global.scss';
import { App } from 'features';
import { Provider } from "react-redux";
import configureStore from "store";

import reportWebVitals from './reportWebVitals';


const bootstrap = async () => {
  const store = configureStore()

  ReactDOM.render(
    <React.StrictMode>
      <Provider store={store}>
        <App />
      </Provider>,
    </React.StrictMode>,
    document.getElementById('root')
  );
};
bootstrap();

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
