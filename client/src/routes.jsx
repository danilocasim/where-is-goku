import App from './App.jsx';
import Gameboard from './pages/Gameboard/Gameboard.jsx';
import LeaderboardPage from './pages/LeaderboardPage/LeaderboardPage.jsx';
import ErrorPage from './pages/ErrorPage/ErrorPage.jsx';

const routes = [
  {
    path: '/',
    element: <App />,
    errorElement: <ErrorPage />,
    children: [
      { index: true, element: <Gameboard /> },
      { path: '/leaderboard', element: <LeaderboardPage /> },
    ],
  },
];

export default routes;
