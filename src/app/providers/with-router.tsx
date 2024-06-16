import { Suspense, lazy } from 'react';

import { useRoutes } from 'react-router-dom';

const MainLayout = lazy(() => import('shared/layouts/main-layout'));
const NotFoundPage = lazy(() => import('pages/not-found'));
const HomePage = lazy(() => import('pages/home'));

export const Router = () => {
  const router = useRoutes([
    {
      element: <MainLayout />,
      children: [
        {
          index: true,
          element: <HomePage />,
        },
      ],
    },
    {
      path: '*',
      element: <NotFoundPage />,
    },
  ]);

  return <Suspense>{router}</Suspense>;
};
