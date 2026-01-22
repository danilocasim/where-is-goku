import App from './App.jsx';
import HomePage from './pages/HomePage/HomePage.jsx';
import LeaderboardPage from './pages/LeaderboardPage/LeaderboardPage.jsx';
import ErrorPage from './pages/ErrorPage/ErrorPage.jsx';

const routes = [
  {
    path: '/',
    element: <App />,
    errorElement: <ErrorPage />,
    children: [
      { index: true, element: <HomePage /> },
      { path: '/leaderboard', element: <LeaderboardPage /> },
    ],
  },
];

export default routes;
