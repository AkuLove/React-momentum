import { useEffect, useState } from 'react';
import {
  getStringDayNumber,
  getStringMonthNumber,
  getGreetingsMessage,
} from '../../store/daySlice';
import style from './Home.module.scss';
import { useAppSelector } from '../../hooks/useAppSelector';
import { useAppDispatch } from '../../hooks/useAppDispatch';
import useLocalStorage from '../../hooks/useLocalStorage';
import Todo from '../../components/Todo/Todo';

function Home() {
  const dispatch = useAppDispatch();
  const weekDay = useAppSelector((state) => state.currentDay.stringDayNumber);
  const month = useAppSelector((state) => state.currentDay.stringMonthNumber);
  const greetingMessage = useAppSelector(
    (state) => state.currentDay.greetingMessage
  );
  const [dayOfMonth, setDayOfMonth] = useState(new Date().getDate());
  const [time, setTime] = useState(new Date());
  const [name, setName] = useLocalStorage('', 'name');

  useEffect(() => {
    dispatch(getStringDayNumber());
    dispatch(getStringMonthNumber());
    dispatch(getGreetingsMessage());
    setInterval(() => {
      setTime(new Date());
      setDayOfMonth(new Date().getDate());
      dispatch(getStringDayNumber());
      dispatch(getStringMonthNumber());
      dispatch(getGreetingsMessage());
    }, 1000);
  }, []);

  return (
    <section>
      <div className={style.homeBody}>
        <p>{time.toLocaleTimeString()}</p>
        <p>{`${weekDay} ${dayOfMonth} ${month}`}</p>
        <div>
          <p>{`${greetingMessage}`}</p>
          <input
            type="text"
            value={name}
            onChange={(e) => setName(e.target.value)}
          />
        </div>
        <div>
          <Todo />
        </div>
      </div>
    </section>
  );
}

export default Home;
