import style from './Home.module.scss';
import Todo from '../../components/Todo/Todo';
import Calendar from '../../components/Calendar/Calendar';
import Settings from '../../components/Settings/Settings';

function Home() {
  return (
    <section className={style.homePage}>
      <div className={style.homeBody}>
        <Calendar />
        <Todo />
        <Settings />
      </div>
    </section>
  );
}

export default Home;
