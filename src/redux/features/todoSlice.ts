import { createSlice, PayloadAction } from "@reduxjs/toolkit";
type TTodo = {
  id: number;
  title: string;
  isCompleted: boolean;
};

type TInitialState = {
  todos: TTodo[];
};
const initialState: TInitialState = {
  todos: [],
};
const todoSlice = createSlice({
  name: "todo",
  initialState,
  reducers: {
    addTodo: (state: TInitialState, action: PayloadAction<TTodo>) => {
      state.todos.push(action.payload);
    },
    deleteTodo: (state, action) => {
      state.todos = state.todos.filter((todo) => todo.id !== action.payload);
    },
  },
});

export const { addTodo, deleteTodo } = todoSlice.actions;

export default todoSlice.reducer;
