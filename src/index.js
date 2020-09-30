import "./firebase"
import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import * as serviceWorker from './serviceWorker';
import StoreProvider from './store';

const page = window.location.href
const redirects = [
  { from: '/github', to: 'https://github.com/nwylynko' },
  { from: '/linkedin', to: 'https://linkedin.com/in/nick-wylynko-17a202193/' }
]

redirects.forEach((redirect) => {
  if (page.includes(redirect.from)) {
    window.location.href = redirect.to
  }
})

ReactDOM.render(<StoreProvider><App /></StoreProvider>, document.getElementById('root'));

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.register();
