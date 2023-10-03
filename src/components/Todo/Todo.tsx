import { useState } from 'react';
import TodoList from './TodoList';
import TodoInput from './TodoInput';
import { useAppDispatch } from '../../hooks/useAppDispatch';
import { addTodo } from '../../store/todoSlice';

function Todo() {
  const dispatch = useAppDispatch();
  const [todoText, setTodoText] = useState('');
  const addTask = () => {
    if (todoText) {
      dispatch(addTodo(todoText));
      setTodoText('');
    }
  };

  return (
    <>
      <TodoInput
        todoText={todoText}
        handleInput={setTodoText}
        handleSubmit={addTask}
      />
      <TodoList />
    </>
  );
}

export default Todo;
