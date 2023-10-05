import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { TodoState } from '../types/interfaces/Todo/ITodoState';
import { ITodo } from '../types/interfaces/Todo/ITodo';

const initialState: TodoState = {
  filter: 'active',
  list: [],
  activeList: [],
  completedList: [],
};

const todoSlice = createSlice({
  name: 'todos',
  initialState,
  reducers: {
    addTodo(state, action: PayloadAction<string>) {
      state.activeList.push({
        id: new Date().toISOString(),
        todoText: action.payload,
        completed: false,
      });
      state.list = state.activeList;
      state.filter = 'active';
    },
    removeTodo(state, action: PayloadAction<string>) {
      state.list = state.list.filter((todo) => todo.id !== action.payload);
      state.activeList = state.activeList.filter(
        (todo) => todo.id !== action.payload
      );
      state.completedList = state.completedList.filter(
        (todo) => todo.id !== action.payload
      );
    },
    toggleTodoComplete(state, action: PayloadAction<string>) {
      if (state.filter === 'active') {
        const activeTodo = state.list.find(
          (todo) => todo.id === action.payload
        );
        if (activeTodo) {
          activeTodo.completed = true;
          const isExist = state.completedList.find(
            (todo) => todo.id === activeTodo.id
          );
          if (!isExist) {
            state.completedList.push(activeTodo);
            state.activeList = state.activeList.filter(
              (todo) => todo.id !== action.payload
            );
            state.list = state.activeList;
          }
        }
      } else if (state.filter === 'complete') {
        const completeTodo = state.list.find(
          (todo) => todo.id === action.payload
        );
        if (completeTodo) {
          completeTodo.completed = false;
          const isExist = state.activeList.find(
            (todo) => todo.id === completeTodo.id
          );
          if (!isExist) {
            state.activeList.push(completeTodo);
            state.completedList = state.completedList.filter(
              (todo) => todo.id !== action.payload
            );
            state.list = state.completedList;
          }
        }
      }
    },
    updateOrder(state, action: PayloadAction<ITodo[]>) {
      if (state.filter === 'active') {
        state.activeList = action.payload;
        state.list = state.activeList;
      } else {
        state.completedList = action.payload;
        state.list = state.completedList;
      }
    },
    setFilter(state, action: PayloadAction<string>) {
      if (action.payload === 'active') {
        state.filter = 'active';
      } else {
        state.filter = 'complete';
      }
    },
    showFilter(state, action: PayloadAction<string>) {
      if (action.payload === 'active') {
        state.list = state.activeList;
      } else {
        state.list = state.completedList;
      }
    },
  },
});

export const {
  addTodo,
  removeTodo,
  toggleTodoComplete,
  updateOrder,
  setFilter,
  showFilter,
} = todoSlice.actions;

export default todoSlice.reducer;
