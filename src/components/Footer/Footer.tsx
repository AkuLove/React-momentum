import { AiFillGithub } from 'react-icons/ai';
import { Link } from 'react-router-dom';
import style from './Footer.module.scss';

function Footer() {
  return (
    <footer>
      <div className={style.container}>
        <div className={style.footerBody}>Footer</div>
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
    </footer>
  );
}

export default Footer;
