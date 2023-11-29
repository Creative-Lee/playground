import { createBrowserRouter } from 'react-router-dom';
import Test from './Test';

const router = createBrowserRouter([
  {
    path: '/',
    index: true,
    element: <Test />,
  },
]);

export default router;
