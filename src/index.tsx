import 'core-js';
import React from 'react';
import ReactDOM from 'react-dom';
import './normalize.css';
import './index.css';
import "./apollo/gql/fragment/fragments"
import * as serviceWorker from './serviceWorker';
import { ApolloProvider } from '@apollo/client';
import client from "./apollo/apolloClient"
import App from './App';

ReactDOM.render(
  <ApolloProvider client={client}>
    <App />
  </ApolloProvider>,
  document.getElementById('root')
);

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
