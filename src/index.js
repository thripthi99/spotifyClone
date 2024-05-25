import React from 'react'
import ReactDOM from 'react-dom';
import AuthProvider from './Api\'s/AuthContent';
import App from './App';
import "./index.css"

ReactDOM.render(
  <AuthProvider>
    <App />
  </AuthProvider>,
  document.getElementById("root")
);