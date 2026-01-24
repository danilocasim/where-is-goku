import style from './Navigation.module.css';

function Navigation() {
  return (
    <nav className={style.nav}>
      <div>Robot City</div>
      <div>Char</div>
      <div>Timer</div>
    </nav>
  );
}

export default Navigation;
