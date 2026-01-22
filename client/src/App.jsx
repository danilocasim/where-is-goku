import { Outlet } from 'react-router';

import Navigation from './components/Navigation/Navigation';
import style from './App.module.css';

function App() {
  return (
    <div className={style.container}>
      <Navigation></Navigation>
      <Outlet />
    </div>
  );
}

export default App;
