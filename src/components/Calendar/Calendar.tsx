import { useEffect, useState } from 'react';
import {
  getStringDayNumber,
  getStringMonthNumber,
  getGreetingsMessage,
} from '../../store/daySlice';

import { useAppSelector } from '../../hooks/useAppSelector';
import { useAppDispatch } from '../../hooks/useAppDispatch';
import useLocalStorage from '../../hooks/useLocalStorage';

import style from './Calendar.module.scss';

function Calendar() {
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
    dispatch(getStringDayNumber(new Date().getDay()));
    dispatch(getStringMonthNumber(new Date().getMonth()));
    dispatch(getGreetingsMessage(new Date().getHours()));
    setInterval(() => {
      setTime(new Date());
      setDayOfMonth(new Date().getDate());
      dispatch(getStringDayNumber(new Date().getDay()));
      dispatch(getStringMonthNumber(new Date().getMonth()));
      dispatch(getGreetingsMessage(new Date().getHours()));
    }, 1000);
  }, []);

  return (
    <div className={style.body}>
      <p className={style.time}>{time.toLocaleTimeString()}</p>
      <p className={style.weekDay}>{`${weekDay} ${dayOfMonth} ${month}`}</p>
      <div className={style.greetingBody}>
        <p className={style.greetingMessage}>{`${greetingMessage}`}</p>
        <input
          type="text"
          value={name}
          onChange={(e) => setName(e.target.value)}
          className={style.nameInput}
          maxLength={18}
          placeholder="[Введите имя]"
        />
      </div>
    </div>
  );
}

export default Calendar;
