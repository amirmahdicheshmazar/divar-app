import React from 'react';


// react-query
import {QueryClient,QueryClientProvider} from '@tanstack/react-query'

// react-query => devtools
import {ReactQueryDevtools} from '@tanstack/react-query-devtools'

// Router => routes
import Router from './Router/Router';

// layout => layout component
import Layout from './layout/Layout';

const queryClient = new QueryClient({
  defaultOptions:{
    queries:{
      refetchOnWindowFocus:false,
      refetchOnMount:false,
      retry: 1,
      staleTime: 60 * 1000,
    },
  },
});

const App = () => {
  return (
    <QueryClientProvider client={queryClient} >
      <Layout>
        <Router/>
      </Layout>
      <ReactQueryDevtools/>
    </QueryClientProvider>
  );
};

export default App;