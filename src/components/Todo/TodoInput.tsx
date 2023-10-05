import { ITodoForm } from '../../types/interfaces/Todo/ITodoForm';

import style from './Todo.module.scss';
import TodoFilter from './TodoFilter';

function TodoInput({ todoText, handleInput, handleSubmit }: ITodoForm) {
  return (
    <form className={style.form}>
      <input
        className={style.input}
        type="text"
        value={todoText}
        onChange={(e) => handleInput(e.target.value)}
      />
      <button className={style.addTodo} onClick={handleSubmit} type="button">
        Add Todo
      </button>
      <TodoFilter />
    </form>
  );
}

export default TodoInput;
