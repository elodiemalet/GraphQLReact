import React from 'react';
import './App.css';
import { ApolloProvider } from "@apollo/react-hooks";
import ApolloClient, { gql } from 'apollo-boost';
import Product from "./components/Product";
import AddCart from "./components/AddCart";
import Cart from "./components/Cart";

const client = new ApolloClient({
  uri: "http://localhost:4000"
});

function App() {
  return (
    <ApolloProvider client={client}>
      <Product/>
      <AddCart/>
      <Cart/>
    </ApolloProvider>
  );
}

export default App;
