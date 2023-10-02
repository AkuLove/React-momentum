import { createSlice } from '@reduxjs/toolkit';

const daySlice = createSlice({
  name: 'day',
  initialState: {
    currentHours: new Date().getHours(),
    numberOfCurrentDay: new Date().getDay(),
    numberOfCurrentMonth: new Date().getMonth(),
    stringDayNumber: '',
    stringMonthNumber: '',
    greetingMessage: '',
  },
  reducers: {
    getStringDayNumber(state) {
      switch (state.numberOfCurrentDay) {
        case 1: {
          state.stringDayNumber = 'Понедельник';
          break;
        }
        case 2: {
          state.stringDayNumber = 'Вторник';
          break;
        }
        case 3: {
          state.stringDayNumber = 'Среда';
          break;
        }
        case 4: {
          state.stringDayNumber = 'Четверг';
          break;
        }
        case 5: {
          state.stringDayNumber = 'Пятница';
          break;
        }
        case 6: {
          state.stringDayNumber = 'Суббота';
          break;
        }
        case 7: {
          state.stringDayNumber = 'Воскресенье';
          break;
        }
        default:
          break;
      }
    },
    getStringMonthNumber(state) {
      switch (state.numberOfCurrentMonth) {
        case 0: {
          state.stringMonthNumber = 'Января';
          break;
        }
        case 1: {
          state.stringMonthNumber = 'Февраля';
          break;
        }
        case 2: {
          state.stringMonthNumber = 'Марта';
          break;
        }
        case 3: {
          state.stringMonthNumber = 'Апреля';
          break;
        }
        case 4: {
          state.stringMonthNumber = 'Мая';
          break;
        }
        case 5: {
          state.stringMonthNumber = 'Июня';
          break;
        }
        case 6: {
          state.stringMonthNumber = 'Июля';
          break;
        }
        case 7: {
          state.stringMonthNumber = 'Августа';
          break;
        }
        case 8: {
          state.stringMonthNumber = 'Сентября';
          break;
        }
        case 9: {
          state.stringMonthNumber = 'Октября';
          break;
        }
        case 10: {
          state.stringMonthNumber = 'Ноября';
          break;
        }
        case 11: {
          state.stringMonthNumber = 'Декабря';
          break;
        }
        default:
          break;
      }
    },
    getGreetingsMessage(state) {
      const hours = state.currentHours;
      switch (true) {
        case hours >= 6 && hours <= 11: {
          state.greetingMessage = 'Доброе утро';
          break;
        }
        case hours >= 12 && hours <= 18: {
          state.greetingMessage = 'Добрый день';
          break;
        }
        case hours >= 19 && hours <= 23: {
          state.greetingMessage = 'Добрый вечер';
          break;
        }
        case hours >= 0 && hours <= 5: {
          state.greetingMessage = 'Доброй ночи';
          break;
        }
        default: {
          break;
        }
      }
    },
  },
});

export const { getStringDayNumber, getStringMonthNumber, getGreetingsMessage } =
  daySlice.actions;

export default daySlice.reducer;
