import { ITodoForm } from '../../types/interfaces/Todo/ITodoForm';

function TodoInput({ todoText, handleInput, handleSubmit }: ITodoForm) {
  return (
    <form>
      <input
        type="text"
        value={todoText}
        onChange={(e) => handleInput(e.target.value)}
      />
      <button onClick={handleSubmit} type="button">
        Add Todo
      </button>
    </form>
  );
}

export default TodoInput;
