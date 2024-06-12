import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App';
import { Provider } from './component/appContext.js';

const rootElement = document.getElementById('root');
const root = ReactDOM.createRoot(rootElement);

root.render(
  <Provider>
      <App />
  </Provider>
);
