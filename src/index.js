import React from 'react';
import {createRoot} from 'react-dom/client'
import './styles/index.css';
import App from './components/App';


import {
  ApolloProvider,
  ApolloClient,
  createHttpLink,
  InMemoryCache
} from '@apollo/client';

// 2
const httpLink = createHttpLink({
  uri: 'http://localhost:4000'
});

// 3
const client = new ApolloClient({
  link: httpLink,
  cache: new InMemoryCache()
});

const rootElement = 
document.getElementById('root');
const root = 
createRoot(rootElement);

// 4
root.render(
  <ApolloProvider client={client}>
    <App />
  </ApolloProvider>,
  document.getElementById('root')
);
