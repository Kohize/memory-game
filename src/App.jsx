import { RouterProvider, createBrowserRouter } from 'react-router';

let router = createBrowserRouter([
  {
    path: '/',
    element: <Menu />,
  },
  {
    path: 'game',
    element: <Game />,
  },
]);

function App() {
  return <RouterProvider router={router} />;
}

export default App;
