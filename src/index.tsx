import React from 'react';
import ReactDOM from 'react-dom';
import App from './router/App';

/* HOC */
import Theming from './HOC/theme'

ReactDOM.render(
  <React.StrictMode>
    <Theming>
      
      <App />
    </Theming>
  </React.StrictMode>,
  document.getElementById('root')
);
