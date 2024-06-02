import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App';
import { BrowserRouter } from 'react-router-dom';
import InjectContext from './store/appContext.js';

const root = ReactDOM.createRoot(document.getElementById('root'));

root.render(
    <BrowserRouter>
      <App />
    </BrowserRouter>
);



// import React from 'react';
// import ReactDOM from 'react-dom/client';
// import App from './App';
// import { BrowserRouter } from 'react-router-dom';
// import injectContext from "./store/appContext";

// const root = ReactDOM.createRoot(document.getElementById('root'));

// const AppWithInjectedContext = injectContext(App);

// root.render(
//   <React.StrictMode>
//     <BrowserRouter>
//     <AppWithInjectedContext />
//     </BrowserRouter>
//  </React.StrictMode>
// );
