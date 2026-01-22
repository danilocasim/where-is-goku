import style from './Dropdown.module.css';

function Dropdown({ posX, posY }) {
  return (
    <nav
      className={style.dropdown}
      style={{ top: posY + 'px', left: posX + 'px' }}
    >
      <h1>Lol</h1>
      <h1>WOw</h1>
    </nav>
  );
}

export default Dropdown;
