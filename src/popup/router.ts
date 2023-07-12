import { RouteObject, createMemoryRouter } from 'react-router-dom';

import { ROUTES } from '@/utils/constants/routes';

import App from './App';
import Home from './pages/home';
import Splash from './pages/splash';
import Recipe from './pages/recipe';

const routes: RouteObject[] = [
  {
    path: '/',
    Component: App,
    children: [
      { path: ROUTES.splash, Component: Splash },
      { path: ROUTES.home, Component: Home },
      { path: ROUTES.recipe, Component: Recipe }
    ],
  },
];

const router = createMemoryRouter(routes, {
  initialEntries: [ROUTES.splash],
});

export default router;
