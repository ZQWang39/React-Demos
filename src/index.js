
import React from 'react';
import ReactDOM from 'react-dom';
// import App from './App'
// import RouterDemo from './components/RouterDemo/RouterDemo';
// import {BrowserRouter as Router} from 'react-router-dom';
import App from './App'
import {Provider} from 'react-redux';
import {store} from './state/index'




ReactDOM.render(
  <React.StrictMode>
   {/* <App />, document.getElementById('root') */}
    {/* <Router>
        <RouterDemo />
    </Router> */}
    <Provider store={store}>
       <App />
    </Provider>
  </React.StrictMode>, document.getElementById('root')
)