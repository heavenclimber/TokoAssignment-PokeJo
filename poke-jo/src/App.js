
import './App.css';
import { ApolloClient, InMemoryCache, ApolloProvider, HttpLink, from } from '@apollo/client'
import { onError } from '@apollo/client/link/error'
import Nav from './Components/Nav';


const errorLink = onError(({ graphqlErrors, networkErrors }) => {
  if (graphqlErrors) {
    graphqlErrors.map(({ message, location, path }) => {
      alert('Graphql error ${message}');
    })
  }
})

const link = from([
  errorLink,
  new HttpLink({ uri: 'https://graphql-pokeapi.graphcdn.app' })
])

const client = new ApolloClient({
  cache: new InMemoryCache(),
  link: link
})



function App() {
  return (
    <ApolloProvider client={client}>
      {" "}
      <div className="container">
      
        <div className='content'>
          <Nav />
        </div>
      </div>
    </ApolloProvider>
  );
}

export default App;
