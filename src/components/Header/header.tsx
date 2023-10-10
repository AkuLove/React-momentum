import { Link } from 'react-router-dom';
import { AiFillGithub } from 'react-icons/ai';
import style from './header.module.scss';

function Header() {
  return (
    <header className={style.header}>
      <div className={style.container}>
        <p className={style.headerBody}>Header</p>
        <div className={style.media}>
          <Link to="https://github.com/AkuLove" className={style.logo}>
            <AiFillGithub />
            <p>AkuLove</p>
          </Link>
          <Link to="https://github.com/sergey-mak1" className={style.logo}>
            <AiFillGithub />
            <p>sergey-mak1</p>
          </Link>
        </div>
      </div>
    </header>
  );
}

export default Header;
