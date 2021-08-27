
import React from 'react';
import ReactDOM from 'react-dom';
// import App from './App'
import RouterDemo from './components/RouterDemo/RouterDemo';
import {BrowserRouter as Router} from 'react-router-dom'



ReactDOM.render(
  <React.StrictMode>
   {/* <App />, document.getElementById('root') */}
    <Router>
        <RouterDemo />
    </Router>
  </React.StrictMode>, document.getElementById('root')
)