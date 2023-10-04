import { ITodoForm } from '../../types/interfaces/Todo/ITodoForm';

import style from './Todo.module.scss';

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
    </form>
  );
}

export default TodoInput;
