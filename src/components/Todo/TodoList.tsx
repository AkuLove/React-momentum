import { useAppSelector } from '../../hooks/useAppSelector';
import TodoItem from './TodoItem';

function TodoList() {
  const todos = useAppSelector((state) => state.todos.list);

  return (
    <ul>
      {todos.map((todo) => (
        <TodoItem key={todo.id} todo={todo} />
      ))}
    </ul>
  );
}

export default TodoList;
