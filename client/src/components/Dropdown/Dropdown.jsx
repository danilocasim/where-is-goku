import style from './Dropdown.module.css';

function Dropdown({ posX, posY }) {
  return (
    <nav
      className={style.dropdown}
      style={{ top: posY + 'px', left: posX + 'px' }}
    >
      <div>
        <div>O</div>
        <div>Goku</div>
      </div>
      <div>
        <div>O</div>
        <div>Mojo Jojo</div>
      </div>{' '}
    </nav>
  );
}

export default Dropdown;
