import { QueryClient, QueryClientProvider } from 'react-query';
import { ReactQueryDevtools } from 'react-query/devtools';
import { Provider } from 'react-redux';
import Config from './Config';
import Router from './router';
import { store } from './store';

const queryClient = new QueryClient();

const App = (): JSX.Element => (
  <Provider store={store}>
    <QueryClientProvider client={queryClient}>
      <Router />
      {Config.nodeEnv === 'development' ? <ReactQueryDevtools initialIsOpen={false} /> : ''}
    </QueryClientProvider>
  </Provider>
);

export default App;
