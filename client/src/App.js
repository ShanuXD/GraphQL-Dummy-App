import React from "react";
import { ApolloClient, InMemoryCache, ApolloProvider } from "@apollo/client";
import DisplatData from "./components/DisplatData";

function App() {
  const client = new ApolloClient({
    cache: new InMemoryCache(),
    uri: "http://localhost:4000/graphql",
  });

  return (
    <ApolloProvider client={client}>
      <div className="App">
        <h1>List Of Data</h1>
        <DisplatData />
      </div>
    </ApolloProvider>
  );
}

export default App;
