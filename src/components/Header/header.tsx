import Weather from '../Weather/Weather';
import style from './header.module.scss';

function Header() {
  return (
    <header className={style.header}>
      <div className={style.container}>
      <Weather/></div>
    </header>
  );
}

export default Header;
