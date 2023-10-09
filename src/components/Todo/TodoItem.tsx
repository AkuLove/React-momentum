import { Reorder } from 'framer-motion';
import { ITodoItem } from '../../types/interfaces/Todo/ITodoItem';
import { useAppDispatch } from '../../hooks/useAppDispatch';
import {
  removeTodo,
  toggleTodoComplete,
  updateOrder,
} from '../../store/todoSlice';

import style from './Todo.module.scss';

const variants = {
  initial: {
    opacity: 0,
    scale: 0,
  },
  animate: {
    opacity: 1,
    scale: 1,
  },
  exit: {
    opacity: 0,
    scale: 0,
  },
};

function TodoItem({ todo, reorderTodos }: ITodoItem) {
  const { id, completed, todoText } = todo;

  const dispatch = useAppDispatch();

  return (
    <Reorder.Item
      value={todo}
      className={style.item}
      onDragEnd={() => dispatch(updateOrder(reorderTodos))}
      {...variants}
      transition={{ duration: 0.6, type: 'spring' }}
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
