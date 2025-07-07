import './App.css'
import Body from './components/Body.jsx';
import Head from './components/Head.jsx'
import { Provider } from 'react-redux';
import store from './utils/store.jsx';
import { createBrowserRouter } from 'react-router-dom';
import Maincontainer from './components/Maincontainer.jsx';
import WatchPage from './components/WatchPage.jsx';
import { RouterProvider } from 'react-router-dom';

const appRouter = createBrowserRouter([{
  path: '/',
  element: <Body />,
  children: [
    {
      path: '/',
      element: <Maincontainer />
    },
    {
      path: '/watch',
      element: <WatchPage />
    }
  ]
}])


function App() {
  return (
    <Provider store={store}>
      <div>
        <Head />
        <RouterProvider router={appRouter} />
      </div>
    </Provider>
  );

}

export default App
