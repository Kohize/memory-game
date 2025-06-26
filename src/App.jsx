import { RouterProvider, createBrowserRouter } from 'react-router';
import Menu from './pages/Menu/Menu';
import Game from './pages/Game/Game';
import Layout from './components/Layout';

let router = createBrowserRouter(
  [
    {
      path: '/',
      element: <Layout />,
      children: [
        {
          index: true,
          element: <Menu />,
        },
        {
          path: 'game',
          element: <Game />,
        },
      ],
    },
  ],
  {
    basename: '/memory-game',
  }
);

function App() {
  return <RouterProvider router={router} />;
}

export default App;
