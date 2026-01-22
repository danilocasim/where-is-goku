import style from './Navigation.module.css';

function Navigation() {
  return (
    <nav className={style.nav}>
      <div>Robot City</div>
      <div>Characters</div>
      <div>Timer</div>
    </nav>
  );
}

export default Navigation;
