import React from 'react';
import ReactDOM from 'react-dom';
import App from './router/App';

/* HOC */
import Theming from './HOC/theme'

const root = document.getElementById('root');

ReactDOM.render(
  <React.StrictMode>
    <Theming>
      
      <App />

    </Theming>
  </React.StrictMode>,
  root
);
