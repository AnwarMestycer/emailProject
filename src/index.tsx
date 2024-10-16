import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import { Inbox } from './components/inbox';
import { Archive } from './components/archive';
import Login from './components/login';
import NotFoundPage from './components/notFound';


const router = createBrowserRouter([
  {
    path: '/',
    element: <App />,
    errorElement: <NotFoundPage />,
    children: [
      {
        path: '',
        element: <Inbox />,
      },
      {
        path: 'archive',
        element: <Archive />,
      }
    ],
    
  },
  {
    path:'login',
    element:<Login />
  }
]);
const root = ReactDOM.createRoot(
  document.getElementById('root') as HTMLElement
);
root.render(
  <React.StrictMode>
   <RouterProvider router={router} />
  </React.StrictMode>
);
reportWebVitals();
