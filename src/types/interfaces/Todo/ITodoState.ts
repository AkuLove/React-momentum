import { ITodo } from './ITodo';

export type TodoState = {
  filter: string;
  list: ITodo[];
  activeList: ITodo[];
  completedList: ITodo[];
};
