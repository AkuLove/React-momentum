import { useAppDispatch } from '../../hooks/useAppDispatch';
import { useAppSelector } from '../../hooks/useAppSelector';
import { showFilter, setFilter } from '../../store/todoSlice';
import style from './Todo.module.scss';

function TodoFilter() {
  const dispatch = useAppDispatch();
  const stateFilter = useAppSelector((state) => state.todos.filter);

  const setNewFilter = (e: React.ChangeEvent<HTMLSelectElement>) => {
    const filter = e.target.value;
    dispatch(setFilter(filter));
    dispatch(showFilter(filter));
  };

  return (
    <select
      onChange={(e) => {
        setNewFilter(e);
      }}
      className={style.filter}
      name="todoFilter"
      id="todoFilter"
      value={stateFilter}
    >
      <option value="active">Активные</option>
      <option value="complete">Выполненые</option>
    </select>
  );
}

export default TodoFilter;
