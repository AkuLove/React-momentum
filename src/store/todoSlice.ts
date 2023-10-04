import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { TodoState } from '../types/interfaces/Todo/ITodoState';
import { ITodo } from '../types/interfaces/Todo/ITodo';

const initialState: TodoState = {
  list: [],
};

const todoSlice = createSlice({
  name: 'todos',
  initialState,
  reducers: {
    addTodo(state, action: PayloadAction<string>) {
      state.list.push({
        id: new Date().toISOString(),
        todoText: action.payload,
        completed: false,
      });
    },
    removeTodo(state, action: PayloadAction<string>) {
      state.list = state.list.filter((todo) => todo.id !== action.payload);
    },
    toggleTodoComplete(state, action: PayloadAction<string>) {
      const toggledTodo = state.list.find((todo) => todo.id === action.payload);
      if (toggledTodo) {
        toggledTodo.completed = !toggledTodo?.completed;
      }
    },
    updateOrder(state, action: PayloadAction<ITodo[]>) {
      state.list = action.payload;
    },
  },
});

export const { addTodo, removeTodo, toggleTodoComplete, updateOrder } =
  todoSlice.actions;

export default todoSlice.reducer;
