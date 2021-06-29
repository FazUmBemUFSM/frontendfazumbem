import React from 'react';
import ReactDOM from 'react-dom';
import App from './router/App';

/* HOC */
import Theming from './HOC/theme'

/* Components */
import Header from './components/header/header'

ReactDOM.render(
  <React.StrictMode>
    <Theming>
      <Header/>
      <App />
    </Theming>
  </React.StrictMode>,
  document.getElementById('root')
);
