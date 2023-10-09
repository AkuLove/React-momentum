import { useState } from 'react';
import TodoList from './TodoList';
import TodoInput from './TodoInput';
import { useAppDispatch } from '../../hooks/useAppDispatch';
import { addTodo } from '../../store/todoSlice';

import style from './Todo.module.scss';

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
    <div className={style.todo}>
      <div className={style.body}>
        <TodoInput
          todoText={todoText}
          handleInput={setTodoText}
          handleSubmit={addTask}
        />
        <TodoList />
      </div>
    </div>
  );
}

export default Todo;
