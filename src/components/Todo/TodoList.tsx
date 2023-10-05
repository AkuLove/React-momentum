import { Reorder, AnimatePresence } from 'framer-motion';
import { useEffect, useState } from 'react';
import { useAppSelector } from '../../hooks/useAppSelector';
import TodoItem from './TodoItem';

import style from './Todo.module.scss';

function TodoList() {
  const todos = useAppSelector((state) => state.todos.list);
  const [reorderTodos, setReorderTodos] = useState(todos);

  useEffect(() => {
    setReorderTodos(todos);
  }, [todos]);

  return (
    <AnimatePresence initial={false} mode="wait">
      <Reorder.Group
        axis="y"
        values={todos}
        onReorder={setReorderTodos}
        className={style.list}
      >
        {reorderTodos.map((todo) => (
          <TodoItem key={todo.id} todo={todo} reorderTodos={reorderTodos} />
        ))}
      </Reorder.Group>
    </AnimatePresence>
  );
}

export default TodoList;
