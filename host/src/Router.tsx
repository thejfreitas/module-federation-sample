import React, { lazy, Suspense } from 'react';
import { createBrowserRouter, RouterProvider } from 'react-router-dom';

import App from './App';
import Home from './pages/Home';
import About from './pages/About';
import Header from './components/Header';
import ErrorBoundary from './components/ErrorBoundary';

// @ts-ignore
const RemoteCart = lazy(() => import('cart/App'));

const router = createBrowserRouter([
  {
    path: '/',
    element: <App />,
    children: [
      {
        path: '/',
        element: <Home />,
      },
      {
        path: '/about',
        element: <About />,
      },
      {
        path: '/cart',
        element: (
          <>
            <Header />
            <Suspense fallback={<>...loading</>}>
              <ErrorBoundary>
                <RemoteCart />
              </ErrorBoundary>
            </Suspense>
          </>
        ),
      },
    ],
  },
]);

export default function Router() {
  return <RouterProvider router={router} />;
}
