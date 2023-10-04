import { Reorder } from 'framer-motion';
import { useAppDispatch } from '../../hooks/useAppDispatch';
import {
  removeTodo,
  toggleTodoComplete,
  updateOrder,
} from '../../store/todoSlice';
import { ITodo } from '../../types/interfaces/Todo/ITodo';

import style from './Todo.module.scss';

function TodoItem({
  todo,
  reorderTodos,
}: {
  todo: ITodo;
  reorderTodos: ITodo[];
}) {
  const { id, completed, todoText } = todo;

  const dispatch = useAppDispatch();

  return (
    <Reorder.Item
      value={todo}
      className={style.item}
      onDragEnd={() => dispatch(updateOrder(reorderTodos))}
    >
      <span className={style.itemText}>{todoText}</span>
      <input
        type="checkbox"
        checked={completed}
        onChange={() => dispatch(toggleTodoComplete(id))}
      />
      <button type="button" onClick={() => dispatch(removeTodo(id))}>
        &times;
      </button>
    </Reorder.Item>
  );
}
export default TodoItem;
