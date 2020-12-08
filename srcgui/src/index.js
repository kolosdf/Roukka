import React from 'react';
import './App.css'
import ReactDOM from 'react-dom';
import App from './App';

import * as serviceWorker from './serviceWorker';

const theme = createMuiTheme({

  palette:{
  
    primary:{
      main: '#212121'
    },
    secondary:{
      main: '#ffc107'
    }
  
  }

})

ReactDOM.render(
    <ThemeProvider theme={theme}>
    <App />
    </ThemeProvider>
    , document.getElementById('root'));

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
