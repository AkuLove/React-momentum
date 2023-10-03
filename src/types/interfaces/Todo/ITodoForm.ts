export interface ITodoForm {
  todoText: string;
  handleInput: (str: string) => void;
  handleSubmit: () => void;
}
