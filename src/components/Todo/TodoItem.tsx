import { useAppDispatch } from '../../hooks/useAppDispatch';
import { removeTodo, toggleTodoComplete } from '../../store/todoSlice';
import { ITodo } from '../../types/interfaces/Todo/ITodo';

function TodoItem({ todo }: { todo: ITodo }) {
  const { id, completed, todoText } = todo;

  const dispatch = useAppDispatch();

  return (
    <li>
      <span>{todoText}</span>
      <input
        type="checkbox"
        checked={completed}
        onChange={() => dispatch(toggleTodoComplete(id))}
      />
      <button type="button" onClick={() => dispatch(removeTodo(id))}>
        &times;
      </button>
    </li>
  );
}
export default TodoItem;
