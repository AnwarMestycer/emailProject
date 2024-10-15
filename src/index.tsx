import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import { Inbox } from './components/inbox';
import { Archive } from './components/archive';


const router = createBrowserRouter([
  {
    path: '/',
    element: <App />,
    children: [
      {
        path: 'inbox',
        element: <Inbox />,
      },
      {
        path: 'archive',
        element: <Archive />,
      }
    ],
  },
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
